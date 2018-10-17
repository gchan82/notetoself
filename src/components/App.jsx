import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }
  render() {
    return (
      <div>
        <h2>note to self</h2>
        <Form inline={true}>
          <FormControl
            onChange={event => this.setState({ text: event.target.value })}
          />{" "}
          <Button onClick={() => console.log(this.state)}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
