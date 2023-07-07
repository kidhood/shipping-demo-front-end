import { Box, Pagination } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ordersSlice, { getListOrders, ordersSliceSelector } from '../../redux/ordersSlice';

const PagingListOrder = () => {
    const dispatch = useDispatch();
    const {currentPageNumber, totalPageNumber} = useSelector(ordersSliceSelector); 
    const handleNextPage = (e, value) => {
        console.log(e, "day la e")
        console.log(value, "day la value")
        dispatch(ordersSlice.actions.changeCurrentNumber(value));
        dispatch(getListOrders());
    }
  return (
    <Box sx={{margin: '0px auto', width: '100%',textAlign: 'center', marginTop: '20px'}}>
        <Pagination  sx={{margin: '0px auto', width: 'fit-content' }}
         count={totalPageNumber} 
         showFirstButton
        showLastButton 
        onChange={handleNextPage}
        />
    </Box>
  )
}

export default PagingListOrder