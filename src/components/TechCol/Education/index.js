import React from "react";

class Education extends React.Component {
  render() {
    return (
      <div class="ui orange column container segment">
        <div>
          <p>
            <strong
              style={{
                maxWidth: 100,
                fontWeight: "bold",
                letterSpacing: -2,
                fontSize: 20,
                alignContent: "right",
                color: "orange",
              }}
            >
              <strong /> UTSA
            </strong>
            <span
              style={{
                overflow: "visible",
                right: 0,
                float: "right",
                color: "lightgray",
              }}
            >
              Jan 2016 - Dec 2020
            </span>
          </p>
        </div>
        <div>
          <strong style={{ letterSpacing: -1 }}>
            University of Texas - San Antonio
          </strong>
          <small style={{ float: "right" }}>GPA 3.63/4.0</small>
        </div>
        <div class="ui orange label" style={{ margin: 1 }}>
          <div>Bachelor in Computer Science</div>
        </div>
      </div>
    );
  }
}

export default Education;
