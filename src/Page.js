import React, { Fragment } from 'react'
import NotesComponent from './NotesComponent'

export default class Page extends React.Component {

  render() {
    return(
      <Fragment>
      <p>Page Component</p>
      <p>Welcome, {this.props.user}</p>

      <NotesComponent user={this.props.user} notes={this.props.notes}
      onUserChange={this.props.onUserChange} onNoteChange={this.props.onNoteChange} onSubmit={this.props.onSubmit}/>

      </Fragment>
    )
  }
}
