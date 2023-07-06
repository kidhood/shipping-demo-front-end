import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Button, IconButton, TableCell, TableRow } from '@mui/material'
import moment from 'moment'
import React, { useState } from 'react'
import { orderStatus, orderStatusList } from '../../../config/common/orderConstant'
import { useDispatch } from 'react-redux'
import ordersSlice, { getListOrders, updateStatusOrder } from '../../../redux/ordersSlice'
import { toast } from 'react-toastify'
import AddToCartToast, { toastType } from '../../../component/toast/content/AddToCartToast'

export const Row = ({item}) => {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    const handleChangeStatus = async (order, status) => {
        const changeStatus = {
            ids: [order.id],
            status: status
        };
        const data = await dispatch(updateStatusOrder(changeStatus));
        if(data.payload.status !== 400 ) {
            toast(
                <AddToCartToast
                  type={toastType.WARNING_INPUT}
                  msg={"Change status success!"}
                />,
                {
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose: 1500,
                }
              );
        }
        dispatch(getListOrders());
        console.log(data, 'datane')
    }


  return (
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
        <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
        >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </IconButton>
        </TableCell>
        <TableCell align="right">{item.id}</TableCell>
        <TableCell align="right">{item.paymentMethod === 'DELIVERY' ? 'COD' : 'PAYPAL'}</TableCell>
        <TableCell align="right">{item.shippingFee}$</TableCell>
        <TableCell align="right">{item.orderStatus.status}</TableCell>
        <TableCell align="right">{moment(item.createdDate).format('DD/MM/YYYY HH:mm')}</TableCell>
        <TableCell align="right">
            {
                item.orderStatus.id !== orderStatus.DELIVERED && 
                <>
                    <Button 
                    variant="contained"
                    sx={{margin: '10px',
                    padding: '10pxpx',
                    
                    }}
                    disabled={item.orderStatus.id === orderStatus.CANCELLE || item.orderStatus.id === orderStatus.DELIVERED }
                    onClick={() => handleChangeStatus(item, item.orderStatus.id + 1) }
                    >
                        {orderStatusList[item.orderStatus.id + 1]}
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                    >
                        Cancel
                    </Button>
                </>
            }
        </TableCell>
    </TableRow>
  )
}
