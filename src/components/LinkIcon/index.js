import React from "react";

class LinkIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: "",
      desc: "",
    };
  }

  render() {
    return (
      <small class="ui image label" style={{ margin: 2 }}>
        <img
          src={this.props.imgSrc}
          style={{ maxWidth: 25, maxHeight: 25 }}
          alt=""
        />
        {this.props.desc}
      </small>
    );
  }
}

export default LinkIcon;
