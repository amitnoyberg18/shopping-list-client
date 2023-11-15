import React from 'react'
import styles from '../../../assets/product-list/products-list.module.scss'
import { Product } from '../../types/Product'

type Props = {
    categoryName: string
    categoryProducts: {
        [x: string]: Product[];
    }
}

const CategoryList:React.FC<Props> = ({categoryName, categoryProducts}) => {
  return (
    <div className={styles['category-list']}>
        <h4 className={styles['category-title']}>{categoryName}</h4>
        <ul>
            {categoryProducts[categoryName].map(product => (
                <li key={product._id}>{product.name} {product.amount > 1 ? `(${product.amount})`: undefined}</li>
            ))}
        </ul>
  </div>
  )
}

export default CategoryList