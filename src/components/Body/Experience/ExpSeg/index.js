import React from "react";

class ExpSeg extends React.Component {
  render() {
    return (
      <div class="ui raised container segment">
        <div>
          <bold style={{ fontWeight: 900 }}>
            {this.props.company}
            <small style={{ float: "right" }}>{this.props.timeRange}</small>
          </bold>
        </div>
        <div>
          <div class="ui blue label" style={{ margin: 1 }}>
            {this.props.title}
          </div>
        </div>
        <small>{this.props.location}</small>
        <p>
          <ul>
            <li>{this.props.bullets}</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default ExpSeg;
