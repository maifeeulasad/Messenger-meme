import React from 'react';
import IMessagesProps from "../interface/IMessagesProps";
import {MessageType} from "../interface/MessageType";

class Messages extends React.Component<IMessagesProps> {

    styleMessage=(message:String):String=>{
        return message;
    };

    render() {
        return (

            <div className={this.props.messageType ===MessageType.Received ? "messages messages--received" : "messages messages--sent"}>
                {
                    this.props.messages.map((message) =>{
                        return(<div className="message">{this.styleMessage(message)}</div>)
                    })
                }
            </div>);
    }


}

export default Messages;
