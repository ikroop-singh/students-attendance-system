import React, { useState } from 'react';
import{Container,Typography,AppBar} from '@mui/material'
import {customStyles} from './styles'
import Form from './components/form/form'
import TableData from './components/table/tableData'

const App = () => {
  
  const dataInitial=[];
  const [data,setData]=useState(dataInitial);

  
  return (
    <Container>
          <AppBar sx={customStyles.appBar} position='static' color='inherit'>
            <Typography variant='h4' align='center' color='rgba(0,183,255, 1)'>Students attendance system</Typography>
          </AppBar>
          <Form data={data} setData={setData}/>
          <TableData data={data}/>
    </Container>
  )
}

export default App
