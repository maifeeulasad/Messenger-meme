import React from 'react';
import IMessagesProps from "../interface/IMessagesProps";
import {IMessageType} from "../interface/IMessageType";

class Messages extends React.Component<IMessagesProps> {

    render() {
        return (

            <div className={this.props.messageType ===IMessageType.Received ? "messages messages--received" : "messages messages--sent"}>
                {
                    this.props.messages.map((message) =>{
                        return(<div className="message">{message}</div>)
                    })
                }
            </div>);
    }


}

export default Messages;
