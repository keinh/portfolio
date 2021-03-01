import React from "react";

class Education extends React.Component {
  render() {
    return (
      <div class="ui orange column container segment">
        <div>
          <p>
            <b
              style={{
                fontWeight: 10000,
                maxWidth: 100,
                letterSpacing: -2,
                fontSize: 20,
                alignContent: "right",
                color: "orange",
              }}
            >
              UTSA
            </b>
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
          University of Texas - San Antonio
          <small style={{ float: "right" }}>GPA 3.63/4.0</small>
        </div>
        <div class="ui orange label">
          <div class="detail">Bachelor in Computer Science</div>
        </div>
      </div>
    );
  }
}

export default Education;
