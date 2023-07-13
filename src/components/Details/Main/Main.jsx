import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './style'
import Form from './Form/Form';
import List from './List/List';
function Main() {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader = "Powered by Bharats"/> 
          <CardContent>
              <Typography align='center' variant='h5'>Total Balance $100</Typography>
              <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }} >
                  {/* Infocard */}
                  Try saying Add income for $100 in category salary for monday..
              </Typography>
              <Divider />
              <Form/>
          </CardContent>
          <CardContent className={classes.CardContent} >
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <List/>
                  </Grid>
              </Grid>

          </CardContent>
      
    </Card>
  )
}

export default Main
