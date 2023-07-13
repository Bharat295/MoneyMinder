import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import useStyles from './styles';
import useTransactions from '../../useTransactions';

function Details({title}) {
  
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  console.log("Chart -> ", chartData);
  console.log("Tie - > ", title);
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
       
      <CardContent>
        
                  <Typography>
                  ${total}
                  </Typography>
                  {/* <Doughnut data= {chartData} /> */}
         </CardContent>
         
    </Card>
  )
}

export default Details
