import React, { Component } from 'react'
import { Grid, Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';
import {todoData} from '../db/firebase'
import Todo from './Todo'
import { withStyles} from '@material-ui/core/styles';
import './styles.scss'

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
   
  }))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }
    UNSAFE_componentWillMount() {
        todoData.on('value', (todos) => {
        var todoList =[]
            todos.forEach(element => {
                let key = element.key;
                let todoName = element.val().todoName;
                let isDone = element.val().isDone;
                todoList.push(
                    {
                        key: key,
                        todoName: todoName,
                        isDone: isDone
                    }
                )
            })
            this.setState({
                dataFirebase:todoList
            })
        })
    }
    showTodos = ()=> {

        if(this.state.dataFirebase) {
            return this.state.dataFirebase.map((value, key) => {
                return (
                    <Todo
                        key = {key}
                        i = {key}
                        todo = {value}
                        todoName = {value.todoName}
                     />  
                )
            })
        }
         
    }
    // "table table-hover"
    render() {

        return (
            <Grid item xs={8}>
                
                <Table className="table table-hover">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell scope="col">STT</StyledTableCell>
                            <StyledTableCell scope="col">Name</StyledTableCell>
                            <StyledTableCell scope="col">Action</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.showTodos()
                        }
                    </TableBody>
                </Table>
            </Grid>
        )
    }
}
