import { Component } from "react";

class Message extends Component {
    render() {
        return <h1>This is a class component
            <br />Message code is : {this.props.messagecode}
            <br />Message is: {this.props.messagecontent}</h1>
    }
}

export default Message;