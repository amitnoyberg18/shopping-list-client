import useReactQuery from '../http/useReactQuery'
import styles from '../../assets/shopping-list.module.scss'
import { useDispatch } from 'react-redux'
import { AppDispatch, useStoreSelector } from '../state/store'
import { Product } from '../types/Product'
import amountOfProducts from '../functions/amountOfProducts'
import { initial } from '../state/product/totalProducts'
import ProductForm from '../components/product-form/ProductForm'
import { productsByCategories } from '../functions/productsByCategories'
import { useMemo } from 'react'
import ProductsList from '../components/products-area/ProductsArea'
import { patchIncrementAmountAsync, postProductAsync } from '../state/product/productForm'
import Loader from '../components/Loader'
import TotalAmount from '../components/TotalAmount'
import { useToasts } from 'react-toast-notifications';

const ShoppingList = () => {

  const { addToast } = useToasts();

  const name = useStoreSelector(state => state.productForm.name)
  const categoryId = useStoreSelector(state => state.productForm.categoryId)

  const dispatch = useDispatch<AppDispatch>();
  
  const { 
    isLoading,
    data: products,
    refetch
  } = useReactQuery<Product[]>('/product',['products' ], {onSuccess: (data) => {
    dispatch(initial(amountOfProducts(data)))
  }})

  const categoryProducts = useMemo(() => productsByCategories(products ?? []), [products])

  const handleProductSubmit = async ()=> {
    //Empty Inputs Check
    if(!name) return addToast('לא הוזן שם', { appearance: 'error', autoDismiss: true });
    if(!categoryId) return addToast('לא נבחרה קטגוריה', { appearance: 'error', autoDismiss: true });

    // POST or PATCH 
    const product = products?.find(p => p.name.trim() === name && p.category._id === categoryId)
    if(product) return dispatch(patchIncrementAmountAsync({_id: product._id, amount: product.amount, onSuccess: async ()=> {
      await refetch()
      addToast('עודכן בהצלחה', { appearance: 'success', autoDismiss: true })
    }}))

    dispatch(postProductAsync({name, categoryId, onSuccess: async ()=> {
      await refetch()
      addToast('נוסף בהצלחה', { appearance: 'success', autoDismiss: true })
    }}))
  }

  return (
    <div className={styles['page']}>
      <Loader loading={isLoading} />
      <TotalAmount />
      <ProductForm onClick={handleProductSubmit}/>

      {
        (!isLoading && products && products.length > 0) 
        ? 
          <ProductsList categoryProducts={categoryProducts}/> 
        :
        <div className={styles['no-results']}>{`הרשימה ריקה :(`}</div>
      }


      </div>

  )
}

export default ShoppingList