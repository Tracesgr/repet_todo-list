import React, { Component } from 'react'
import { Grid, AppBar, Toolbar, Typography } from '@material-ui/core'
import List from './Todos/List'
import Add from './Todos/Add'

export default class App extends Component {
  render() {
    return (
      <Grid container spacing={1} justify="space-between">
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Typography variant="h4" color='primary'>
              TODO List
            </Typography>
          </Toolbar>
        </AppBar>
        <List />
        <Add />
      </Grid>
    )
  }
}
