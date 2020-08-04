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

  componentDidMount() {
    const data = localStorage.getItem("list");
    if (data) this.setState({ list: JSON.parse(data) });
  }

  onResults = (result) => {
    const auxList = this.state.list;
    auxList.reverse();
    auxList.push({ data: result, ready: false });
    auxList.reverse();
    this.setState({ list: auxList });
    localStorage.setItem("list", JSON.stringify(this.state.list));
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
