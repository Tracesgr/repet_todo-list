import React, { Component } from 'react'
import {Button, Grid, TextField, FormGroup, Tooltip} from '@material-ui/core';
import { connect } from 'react-redux';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoName: '',
            isDone:false
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name)
        // console.log(value)
        this.setState({
            [name]: value
        })
    }
    addData = (todoName) => {
        let item = {}
        item.todoName = todoName;
        item.isDone = this.state.isDone;

        
        // console.log(todoName) 
        // this.props.getData(item)
        console.log(item)
        if(!item.todoName) return;

        this.props.addDataStore(item)
        this.resetForm();
        this.setState({todoName : ''})
    }
    resetForm() {
        this.setState({todoName: ''})
    }
    render() {
        return (
            <Grid item xs={4}>
                <FormGroup noValidate autoComplete="off">
                    <TextField onChange={(event) => this.isChange(event)} label="Add todo" value={this.state.todoName}  name="todoName" type="text" required/>

                    <Tooltip title="Add todo job">  
                        <Button onClick={() => this.addData(this.state.todoName)} variant="contained" color="primary" type="reset">Add</Button>
                    </Tooltip>
                   
                </FormGroup>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_ITEM",getItem})
        }   
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Add)