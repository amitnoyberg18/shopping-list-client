import { Button, TextField } from '@mui/material'
import CategorySelect from './CategorySelect'
import { AppDispatch, useStoreSelector } from '../../state/store';
import styles from '../../../assets/product-form.module.scss'
import { addName} from '../../state/product/productForm';
import React from 'react';
import { useDispatch } from 'react-redux';

interface Props {
    onClick: () => void
}

const ProductForm:React.FC<Props> = ({onClick}) => {

    const name = useStoreSelector(state => state.productForm.name)
    const dispatch = useDispatch<AppDispatch>();


    return (
        <form className={styles['product-form']}>
            <TextField 
                id="outlined-basic" 
                label="שם המוצר" 
                variant="outlined" 
                value={name}
                onChange={(e)=>dispatch(addName({
                    name: e.target.value,
                }))}
            />
            <CategorySelect/>
            <Button 
                type="button"  
                className={styles['submit-button']}
                variant="contained" 
                onClick={onClick}
                >
                    הוסף
                </Button>
        </form>
    )
}

export default ProductForm