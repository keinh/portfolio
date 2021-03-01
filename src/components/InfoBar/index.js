import React from "react";
import LinkIcon from "../LinkIcon";
import linkedIn from "../resources/icons/linkedin.png";
import email from "../resources/icons/email2.png";
class InfoBar extends React.Component {
  render() {
    return (
      <div class="ui container segment">
        <div class="content">
          <h1 class="header" style={{ margin: 3 }}>
            Kein Hilario
          </h1>
          <div class="ui divider" style={{ margin: 3 }} />
          <div class="meta" style={{ margin: 5 }}>
            A software engineer with a desire to learn
          </div>
          <div class="row">
            <LinkIcon
              imgSrc={email}
              desc="keinhilario@gmail.com"
              float="left"
            />
            <LinkIcon
              imgSrc={linkedIn}
              desc="linkedin.com/in/kein-hilario"
              float="right"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default InfoBar;
