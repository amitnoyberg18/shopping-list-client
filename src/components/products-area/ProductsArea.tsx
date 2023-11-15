import { Product } from '../../types/Product';
import styles from '../../../assets/product-list/products-list.module.scss'
import ProductItem from './CategoryList';

type Props = {
    categoryProducts: {
      [x: string]: Product[];
  }
}

const ProductsArea = ({categoryProducts}: Props) => {
  return (
    <div className={styles['products-container']}>
      {Object.keys(categoryProducts).map(categoryName => (
        <ProductItem 
          key={categoryName} 
          categoryName={categoryName} 
          categoryProducts={categoryProducts}/>
      ))}
  </div>
  )
}

export default ProductsArea