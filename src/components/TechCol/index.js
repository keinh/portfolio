import React from "react";
import Courses from "./Courses";
import Technology from "./Technology";
import Education from "./Education";

class TechCol extends React.Component {
  render() {
    return (
      <div class="ui column" style={{ width: "auto" }}>
        <Education />
        <Technology />
        <Courses />
      </div>
    );
  }
}

export default TechCol;
