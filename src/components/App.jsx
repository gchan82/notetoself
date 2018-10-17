import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import Note from "./Note";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

const cookie_key = "NOTES";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
      notes: []
    };
  }

  componentDidMount() {
    this.setState({ notes: read_cookie(cookie_key) });
  }

  Submit = event => {
    event.preventDefault();
    const { notes, text } = this.state;
    notes.push({ text });
    this.setState({ notes });
    bake_cookie(cookie_key, this.state.notes);
  };

  clear = () => {
    delete_cookie(cookie_key);
    this.setState({ notes: [] });
  };

  render() {
    return (
      <div>
        <h2>note to self</h2>
        <Form onSubmit={this.Submit} inline>
          <FormControl
            onChange={event => this.setState({ text: event.target.value })}
          />{" "}
          <Button onClick={this.Submit}>Submit</Button>
        </Form>
        {this.state.notes.map((note, index) => {
          return <Note key={index} note={note} />;
        })}
        <hr />
        <Button onClick={this.clear}>Clear Notes</Button>
      </div>
    );
  }
}

export default App;
