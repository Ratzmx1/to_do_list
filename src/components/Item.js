import React, { Component } from "react";

class Item extends Component {
  click = () => {
    this.props.text.ready = true;
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <div className="card" onClick={this.click}>
          <div className="card-body">
            {this.props.text.ready ? (
              <p style={{ textDecoration: "line-through" }}>
                {this.props.text.data}
              </p>
            ) : (
              <p>{this.props.text.data}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export { Item };
