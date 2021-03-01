import React from "react";
import InfoBar from "./InfoBar";
import TechCol from "./TechCol";
import Body from "./Body";
class App extends React.Component {
  render() {
    return (
      <div class="ui grid raised container" style={{}}>
        <div class="ui justified center row" style={{ float: "left" }}>
          <InfoBar />
        </div>
        <div class="ui grid">
          <div class="five wide column">
            <TechCol />
          </div>

          <div class="eight wide column">
            <Body />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
