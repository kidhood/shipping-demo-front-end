import { AppBar, Tab, Tabs } from '@mui/material'
import React from 'react'

const HeaderContainer = () => {
  return (
    <AppBar title="Shipping">
      <Tabs>
        <Tab label="To"></Tab>
        <Tab label="Thich"></Tab>
        <Tab label="Cau"></Tab>
        <Tab label="x3000"></Tab>
      </Tabs>
    </AppBar>
  )
}

export default HeaderContainer
