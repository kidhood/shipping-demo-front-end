import { Container } from '@mui/material'
import React from 'react'
import HeaderContainer from '../header/HeaderContainer'
import FooterContainer from '../footer/FooterContainer'
import TableOrderContainer from '../table/TableOrderContainer'
import ToastCustom from '../../component/toast/ToastCustom'

const LayoutContainer = () => {
  return (
    <Container>
        <HeaderContainer/>
        <ToastCustom />
        <TableOrderContainer/>
        {/* <FooterContainer/> */}
    </Container>
  )
}

export default LayoutContainer