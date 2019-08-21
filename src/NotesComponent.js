import React from 'react'

export default class NotesComponent extends React.Component {

  render() {
    return(
      <div>
        <p>Rendering Notes Component</p>
        <p>{this.props.notes}</p>
      </div>
    )
  }
}
