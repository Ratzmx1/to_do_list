import React, { Component } from "react";

class Input extends Component {
  // eslint-disable-next-line
  state = {
    textInput: "",
  };

  onChangeTextInput = (e) => {
    this.setState({ textInput: e.target.value });
  };

  onSubmitForm = (e) => {
    if (this.state.textInput) {
      this.props.onResults(this.state.textInput);
      this.setState({ textInput: "" });
    }

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <div className="form-group inline">
            <input
              className="form-control"
              type="text"
              onChange={this.onChangeTextInput}
              value={this.state.textInput}
            ></input>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Agregar
          </button>
        </form>
      </div>
    );
  }
}

export { Input };
