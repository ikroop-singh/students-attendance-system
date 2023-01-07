import React, { useState } from 'react';
import { FormControl, TextField, Button, Paper, Typography } from '@mui/material';
import { customStyles } from './styles'

const Form = ({ data, setData }) => {

  const [formData, setFormData] = useState({
    rollno: '',
    name: '',
  })


  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, checkinTime: new Date().toUTCString() ,checkoutTime:''});
  }

  const checkinHandler = async () => {
    const rollno = formData.rollno;  // taking out roll number from the form input 
    const find = data.find((std) => std.rollno === rollno); // if already exists no need to concat 
    if (!find) {
      setData(data.concat(formData));
      setFormData({
        rollno: '',
        name: '',
      })
    }

  }
  

  const checkoutHandler = () => {
    const rollno = formData.rollno;
    const temp = data;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].rollno === rollno) {
        temp[i].checkoutTime = new Date().toUTCString();
        break;
      }
    }
    setData(temp);
    
    
  }

  return (

    <>
      <Paper sx={customStyles.paper}>

        <FormControl elevation={3}>
          <Typography sx={{ 'textAlign': 'center' }} variant='h5'>Add your details</Typography>
          <TextField sx={customStyles.textField} onChange={changeHandler} value={formData.rollno} name='rollno' variant='outlined' label='Roll number'></TextField>
          <TextField sx={customStyles.textField} onChange={changeHandler} value={formData.name} name='name' variant='outlined' label='Name'></TextField>
          <Button disabled={formData.rollno.length < 3 || formData.name.length < 3} sx={{ margin: '5px 0' }} onClick={checkinHandler} color='success' variant="contained">Check in</Button>
          <Button sx={{ margin: '5px 0' }} onClick={checkoutHandler} color="warning" variant="contained">Check Out</Button>
        </FormControl>
      </Paper>
    </>
  )
}

export default Form;
