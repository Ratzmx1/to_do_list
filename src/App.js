import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Input } from "./components/Input";
import { Item } from "./components/Item";

class App extends Component {
  // eslint-disable-next-line
  state = {
    list: [],
  };

  onResults = (result) => {
    const auxList = this.state.list;
    auxList.reverse();
    auxList.push({ data: result, ready: false });
    auxList.reverse();
    this.setState({ list: auxList });
  };

  render() {
    return (
      <div className="App mt-5">
        <h1>ToDo List</h1>
        <div className="container">
          <Input onResults={this.onResults} />
          <div className="mt-5">
            {this.state.list.map((item, index) => {
              return (
                <div key={index}>
                  <Item text={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
