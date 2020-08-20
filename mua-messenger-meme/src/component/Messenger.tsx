import React from 'react';
import Messages from "./Messages";
import IMessengerProps from "../interface/IMessengerProps";

class Messenger extends React.Component<IMessengerProps> {

    render() {
        return (<div>


            <div className="screen">
                <div className="text-bar">
                    <form className="text-bar__field">
                        <div className={"header header-img"}>
                            <img src={this.props.displayImage} alt={"DP"}/>
                            <div className={"active"}/>
                        </div>
                        <div className={"header-details"}>
                            <div>
                                {this.props.displayName}
                            </div>
                            <div>
                                Active now
                            </div>
                        </div>
                    </form>
                </div>
                <div className="conversation">
                    {
                        this.props.messages.map((message) => {
                            return (<Messages messages={message.messages} messageType={message.messageType}
                                              time={message.time} isRemoved={message.isRemoved}/>)
                        })
                    }
                </div>
                <div className="text-bar">
                    <form className="text-bar__field">
                        <input type="text" placeholder="Type a message"/>
                    </form>
                    <div className="text-bar__thumb">
                        <div className="thumb"/>
                    </div>
                </div>
            </div>

        </div>);
    }

}

export default Messenger;
