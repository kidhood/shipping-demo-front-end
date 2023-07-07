import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Box, Button, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import moment from 'moment'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { orderStatus, orderStatusList } from '../../../config/common/orderConstant'
import { getListOrders, updateStatusOrder } from '../../../redux/ordersSlice'

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
            toast.success('🦄 Success!', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        dispatch(getListOrders());
        console.log(data, 'datane')
    }


  return (
    <>
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
        <TableCell align="right">{item.fullName}</TableCell>
        <TableCell align="right">{item.phoneNumber}</TableCell>
        <TableCell align="right">{item.paymentMethod === 'DELIVERY' ? 'COD' : 'PAYPAL'}</TableCell>
        <TableCell align="right">{item.shippingFee}$</TableCell>
        <TableCell align="right">{item.orderStatus.status}</TableCell>
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
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                            Detail
                        </Typography>
                        <Table size="small" aria-label="purchases">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Address</TableCell>
                                    <TableCell>Create date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        {item.address}
                                    </TableCell>
                                    <TableCell>{moment(item.createdDate).format('DD/MM/YYYY HH:mm')}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    </>
  )
}
