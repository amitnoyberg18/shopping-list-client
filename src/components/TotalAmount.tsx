import { useStoreSelector } from '../state/store'
import styles from '../../assets/shopping-list.module.scss'


const TotalAmount = () => {

    const amount = useStoreSelector(state => state.totalProducts.amount)

    return (
        <div className={styles['total-products']}>
            {`סה"כ: ${amount} מוצרים בסל`}
        </div>
    )
}

export default TotalAmount