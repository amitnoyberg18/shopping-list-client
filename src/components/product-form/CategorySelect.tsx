import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Category } from '../../types/Category';
import useReactQuery from '../../http/useReactQuery';
import { AppDispatch, useStoreSelector } from '../../state/store';
import { addCategory } from '../../state/product/productForm';
import { useDispatch } from 'react-redux';

const CategorySelect = () => {

  const categoryId = useStoreSelector(state => state.productForm.categoryId)
  const dispatch = useDispatch<AppDispatch>();

  const { 
    isLoading,
    data: categories
  } = useReactQuery<Category[]>('/category',['categories'])

  return (
    <Box sx={{ minWidth: 140 }} >
      <FormControl fullWidth >
        <InputLabel id="category-label">קטגוריה</InputLabel>
        <Select
          labelId="category-label"
          id="category-select"
          label="Age"
          value={categoryId}
          onChange={(e) => {dispatch(addCategory({categoryId: e.target.value}))}}
        > 
        {
          (!isLoading && categories) && categories.map(category => (
              <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
    </Box>
  );
}

export default CategorySelect