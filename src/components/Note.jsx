import React, { Component } from "react";

export class Note extends Component {
  render() {
    const { note } = this.props;
    return (
      <div className="note">
        <p>{note.text}</p>
      </div>
    );
  }
}

export default Note;
