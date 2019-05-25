import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      remainingChars: props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
      Remaining characters: {this.state.remainingChars}
      </div>
    );
  }
}

export default TwitterMessage;
