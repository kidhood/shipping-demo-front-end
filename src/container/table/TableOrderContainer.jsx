import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getListOrders, ordersSliceSelector } from '../../redux/ordersSlice';
import moment from 'moment/moment';
import { Row } from './Row/Row';
import { orderStatus } from '../../config/common/orderConstant';

const TableOrderContainer = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const useEffectRun = useRef(false)

    const {ordersData} = useSelector(ordersSliceSelector);
    useEffect(() => {
       if(useEffectRun.current === false) {
          dispatch(getListOrders())
          return () => useEffectRun.current = true;
       }
    },[]) 

  return (
    <Box sx={{marginTop: "50px", width: '100%'}}>
        <TableContainer >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">FULL NAME</TableCell>
            <TableCell align="right">PHONE NUMBER</TableCell>
            <TableCell align="right">PAYMENT METHOD</TableCell>
            <TableCell align="right">SHIPPING FEE</TableCell>
            <TableCell align="right">STATUS</TableCell>
            <TableCell align="right">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ordersData?.map(item => (
          <Row item={item} key={item.id}></Row>  
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default TableOrderContainer