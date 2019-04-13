import React, { Component } from "react";

export default class Comment extends Component {
  render() {
    return (
      <div>
        <div>
          <h5>{this.props.username}</h5>
          <h5>{this.props.timestamp}</h5>
          <p>{this.props.comment}</p>
        </div>
      </div>
    );
  }
}
