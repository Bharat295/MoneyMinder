import React , {useContext} from 'react'
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, List as MUIList, Slide } from '@material-ui/core'
import useStyles from './style'
import { Delete, MoneyOff } from '@material-ui/icons';
import { ExpenseTrackerContest } from '../../../../context/context';


function List() {
    const classes = useStyles();
    const {deleteTransaction , transactions} = useContext(ExpenseTrackerContest);
    // console.log(globalstate);

  
    return (
        <MUIList dense = {false} className={classes.list}>
            {
                transactions.map((transaction) => (
                    <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff/>
                                </Avatar>

                            </ListItemAvatar>
                            <ListItemText primary={transaction.category}
                            secondary = {`$${transaction.amount} - ${transaction.date}`}

                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label='delete' onClick= { () => deleteTransaction(transaction.id) }>
                                    <Delete />
                                </IconButton>
                        </ListItemSecondaryAction>

                        </ListItem>
                    </Slide>
                ))
             }
        </MUIList>
  )
}

export default List
