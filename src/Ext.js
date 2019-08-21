import React from 'react'
import NotesComponent from './NotesComponent'

export default class Ext extends React.Component {

  render() {
    return(
      <div>
        <p>Extension Component</p>
        <p>Welcome, {this.props.user}</p>
        <form onSubmit={ event => this.props.onSubmit(event) }>
          <div>
            <input type="text" name="username" placeholder="Username"
            onChange={event => this.props.onUserChange(event)} value={this.props.user}/>
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="notes" name="notes" placeholder="Notes"
            onChange={event => this.props.onNoteChange(event)} value={this.props.notes}/>
            <label htmlFor="notes">Notes</label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      <a
        className="App-link"
        href="http://localhost:3000/page"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Page
      </a>
      <NotesComponent user={this.props.user} notes={this.props.notes}
      onUserChange={this.props.onUserChange} onNoteChange={this.props.onNoteChange} />

      </div>
    )
  };
}
