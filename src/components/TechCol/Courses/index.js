import React from "react";

class Courses extends React.Component {
  courses = [
    "Data Structures",
    "Object Oriented Systems",
    "Software Engineering",
    "Enterprise Engineering",
    "Application Programming",
    "Systems Programming",
    "Programing Languages",
    "Senior Design",
    "Operating Systems",
    "Analysis of Algirthms",
    "Discreet Mathemtical Structures",
    "Computer Architecture",
    "Computer Orgnization",
  ];

  courseList = this.courses.map((course) => {
    return <div style={{ color: "gray" }}>{course}</div>;
  });

  render() {
    return (
      <div class="ui container segment">
        Courses
        <div class="ui divider" style={{ margin: 3 }} />
        <div>{this.courseList}</div>
      </div>
    );
  }
}

export default Courses;
