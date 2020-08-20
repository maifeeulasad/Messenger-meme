import React from 'react';
import Messages from "./Messages";
import {MessageType} from "../interface/MessageType";
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
                        <div className={"header"}>
                            <div>
                                <text>Maifee Ul Asad</text>
                            </div>
                            <div>
                                <text>Active now</text>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="conversation">
                    <Messages messages={['1dsfsdfsdfsdfsd\nfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfdsfsdfdsfsdfsdfsdsdfsdfdsfsdfsdfsdfsdfsdf','2','3']} messageType={MessageType.Received}/>
                    <Messages messages={['4','5','6']} messageType={MessageType.Sent}/>
                    <Messages messages={['7','8','9']} messageType={MessageType.Received}/>
                    <Messages messages={['10','11','12dfgsdgsgdsgsdgsdgdsgdsgsdgsdgsdgsdgsdgsdgsdgsdgsdgsdgsd']} messageType={MessageType.Received}/>
                    <Messages messages={['ayyyyy','ula la','chumma,chumma de de']} messageType={MessageType.Sent}/>
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
