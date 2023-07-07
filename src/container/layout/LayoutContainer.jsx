import { Container } from '@mui/material'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import PagingListOrder from '../../component/paing-list-order/PagingListOrder'
import HeaderContainer from '../header/HeaderContainer'
import TableOrderContainer from '../table/TableOrderContainer'

const LayoutContainer = () => {
  return (
    <Container>
        <HeaderContainer/>
        <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
        <TableOrderContainer/>
        <PagingListOrder />
        {/* <FooterContainer/> */}
    </Container>
  )
}

export default LayoutContainer