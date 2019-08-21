import React from 'react'
import Ext from './Ext'
import Page from './Page'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class SubApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      notes: "hi"
    }
  }

  handleNameChange = event => {
  this.setState({
    userName: event.target.value
  })
}

handleNoteChange = event => {
  this.setState({
    notes: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault();
  const userName = event.target.children[0].value
  const notes = event.target.children[1].value
  this.setState({
    userName: userName,
    notes: notes
  })
}

  render() {
    return(
  <Router>
    <Switch>
      <Route exact path="/page" render={ (props) => <Page user={this.state.userName} notes={this.state.notes}
        onUserChange={this.handleNameChange} onNoteChange={this.handleNoteChange} onSubmit={this.handleSubmit}/> } />
      <Route path="/" render={ (props) => <Ext user={this.state.userName} notes={this.state.notes}
        onUserChange={this.handleNameChange} onNoteChange={this.handleNoteChange} onSubmit={this.handleSubmit}/> } />
    </Switch>
  </Router>
)}
}
