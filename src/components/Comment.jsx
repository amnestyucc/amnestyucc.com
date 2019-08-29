import React, { Component } from "react";

import "../css/Comment.css";

export default class Comment extends Component {
  render() {
    return (
      <div>
        <div>
          <h5>{this.props.name}</h5>
          <h5 className="timestamp">{this.props.timestamp}</h5>
          <p>{this.props.comment}</p>
        </div>
      </div>
    );
  }
}
