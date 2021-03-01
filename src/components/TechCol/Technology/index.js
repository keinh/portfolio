import React from "react";
import LinkIcon from "../../LinkIcon";
import Git from "./resources/tools/git.png";
import Docker from "./resources/tools/docker.png";
import Maven from "./resources/tools/maven.png";
import Rabbit from "./resources/libraries/rabbitmq.png";
import Coverity from "./resources/tools/coverity.png";
import Clan from "./resources/languages/c.png";
import Java from "./resources/languages/java.png";
import Reactlogo from "./resources/languages/react.png";
import Python from "./resources/languages/python.png";
import JS from "./resources/languages/js.png";
import Jenkins from "./resources/tools/jenkins.png";
import Spring from "./resources/libraries/spring.png";

class Technology extends React.Component {
  render() {
    return (
      <div class="ui container segment">
        Technology
        <div class="ui divider" style={{ margin: 3 }} />
        <small>Languages</small>
        <div class="ui row" style={{ margin: 3 }}>
          <LinkIcon imgSrc={Java} desc="Java" />
          <LinkIcon imgSrc={Reactlogo} desc="React" />
          <LinkIcon imgSrc={Clan} desc="C" />
        </div>
        <div class="ui row" style={{ margin: 3 }}>
          <LinkIcon imgSrc={JS} desc="Javascript" />
          <LinkIcon imgSrc={Python} desc="Python" />
        </div>
        <small>Libraries</small>
        <div class="ui row" style={{ margin: 3}}>
          <LinkIcon imgSrc={Rabbit} desc="RabbitMQ"/>
          <LinkIcon imgSrc={Spring} desc="Spring Boot"/>
        </div>
        <small>Tools</small>
        <div class="ui row" style={{ margin: 3 }}>
          <LinkIcon imgSrc={Git} desc="Git" a />
          <LinkIcon imgSrc={Jenkins} desc="RabbitMQ" />
          <LinkIcon imgSrc={Docker} desc="Docker" />
        </div>
        <div class="ui row" style={{ margin: 3 }}>
          <LinkIcon imgSrc={Maven} desc="Maven" />
          <LinkIcon imgSrc={Coverity} desc="Coverity" />
        </div>
      </div>
    );
  }
}

export default Technology;
