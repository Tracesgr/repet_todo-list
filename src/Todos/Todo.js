import React, { Component } from 'react'
import { connect } from 'react-redux'
import {TableRow, TableCell, Button, ButtonGroup, Tooltip } from '@material-ui/core';

import { withStyles} from '@material-ui/core/styles';



const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

 class Todo extends Component {
    checkDone = () => {
        if(this.props.todo["isDone"] === true) 
            return (<TableCell><s>{this.props.todoName}</s></TableCell>)

        return (<TableCell>{this.props.todoName}</TableCell>)
    }
    doneAction = () => {
        this.props.todo["isDone"] = !this.props.todo["isDone"]

        this.props.updateDone(this.props.todo)
    }
    deleteAction = () => {
        if (window.confirm('Are you sure you wish to delete this item?')) 
        
        this.props.delete(this.props.todo)

    }
    render() {

        return (
            <StyledTableRow>
                <TableCell>{this.props.i}</TableCell>
                {this.checkDone()}
                <TableCell>
                        <ButtonGroup>
                            <Tooltip placement="left" title="Done job">
                                <Button onClick={() =>this.doneAction()} variant="contained" color="primary">DONE</Button>
                            </Tooltip>

                            <Tooltip placement="right" title="Delete job">
                                <Button onClick={()=>this.deleteAction()}  variant="contained" color="inherit">DELETE</Button>
                            </Tooltip>
                            
                        </ButtonGroup>
                </TableCell>
            </StyledTableRow>
        )
    }
}
//onClick={() => this.props.DoneTodo()}

const mapStateToProps = (state) => ({
    isDone : state.isDone
})

const mapDispatchToProps = (dispatch) => {
    return {
        updateDone : (doneItem) => {
            dispatch({type:"UPDATE_DONE",doneItem})
        },
        delete : (deleteItem) => {
            dispatch({type:"DELETE", deleteItem})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)