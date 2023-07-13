import React from 'react'
import useStyles  from './styles'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { useState , useContext } from 'react';
import { ExpenseTrackerContest } from '../../../../context/context';
import { v4 as uuidv4 } from 'uuid';
import { incomeCategories , expenseCategories} from '../../../../constants/categories';
import formatDate from '../../../../utils/formatDate';
const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
}

function Form() {
    const classes = useStyles();
    const [formData, setFromData] = useState(initialState);
    console.log(formData);
    const { addTransaction } = useContext(ExpenseTrackerContest);
    const createTransaction = () => {
        const transaction = { ...formData , amount: Number(formData.amount) , id: uuidv4()}
        addTransaction(transaction);
        setFromData(initialState);
    }
    const selectCategories = (formData.type === 'Income' ? incomeCategories : expenseCategories);
    // const handleCategory = () => {
    //     return <MenuItem key={c.type} value></MenuItem>
    // }
    console.log("Secl => ", selectCategories);
    return (

        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' varint="subtitles" gutterBottom>
                    ....

                    
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={ (e) => setFromData({ ...formData , type:e.target.value})} >
                      <MenuItem value= "Income">Income</MenuItem>
                      <MenuItem value= "Expense">Expense</MenuItem>
                     
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={ (e) => setFromData({ ...formData ,category:e.target.value})}>
                        {/* <MenuItem value = "bussiness">Bussiness</MenuItem>
                        <MenuItem value = "salary">Salary</MenuItem> */}

                        {selectCategories.map( (c) => <MenuItem key = {c.type} value = {c.type} > {c.type} </MenuItem> )}
                    
                    
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth
                    value={formData.amount} onChange={ (e) => setFromData({ ...formData , amount:e.target.value})}
                />
            </Grid>
            <Grid item xs={6}>
                <InputLabel>Date</InputLabel>
                <TextField type="date" fullWidth 
                  value={formData.date} onChange={ (e) => setFromData({ ...formData , date: formatDate(e.target.value)})}  
                />
            </Grid>

            <Button className={classes.button} varint = "outlined" color = "primary" fullWidth onClick={createTransaction}>Create</Button>

      </Grid>
    
    );
}

export default Form
