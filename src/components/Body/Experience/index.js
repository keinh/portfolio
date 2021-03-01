import React from "react";
import ExpSeg from "./ExpSeg";

class Experience extends React.Component {
  experience = [
    {
      company: "Raytheon Technologies",
      title: " Software Engineer I",
      location: "Portsmouth, RI",
      timeRange: "Jan. 2021 - Present",
      bullets: ["Working as part of two teams handling classified information"],
    },
    {
      company: "Raytheon Technologies",
      title: "Software Engineer Intern",
      location: "Portsmouth, RI",
      timeRange: "May. 2020 - Aug. 2020",
      bullets: [
        "Developed a micro service with Java Spring Boot within a 2 month period",
        "Implemented service endpoints to receive and send over 15,000 JSON messages a minute via RabbitMQ",
        "Adapted a Hungarian algorithm to perform assignments within one minute",
        "Wrote over 60 tests using JUnit and Mockito",
      ],
    },
    {
      company: "KLD Associates Inc.",
      title: "Data Analyst",
      location: "San Antonio, TX",
      timeRange: "Sept. 2016 - Feb. 2020",
      bullets: [
        "Entered information in a database and followed government standards to meet 98% accuracy goals. ",
        "Handled private information and ensured its confidentiality by operating systems in a safe manner. ",
        "Organized in groups of four to divide work and meet quarterly deadlines of 4000+ reports. ",
        "Full Time employee 30+ hrs/week while 12 hrs/semester as student ",
      ],
    },
  ];

  jobs = this.experience.map(
    ({ company, title, location, timeRange, bullets }) => {
      const listBullets = bullets.map((arr) => {
        return <li>{arr}</li>;
      });

      return (
        <ExpSeg
          company={company}
          title={title}
          location={location}
          timeRange={timeRange}
          bullets={listBullets}
        />
      );
    }
  );

  render() {
    return (
      <div>
        <bold>Experience</bold>
        {this.jobs}
      </div>
    );
  }
}

export default Experience;
