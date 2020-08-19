import React from 'react';
import Messages from "./Messages";
import {MessageType} from "../interface/MessageType";

class Messenger extends React.Component {

    render() {
        return (<div>


            <div className="screen">
                <div className="text-bar">
                    <form className="text-bar__field" id="form-message">
                        <text>asdasdas</text>
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
                    <form className="text-bar__field" id="form-message">
                        <input type="text" placeholder="Type or thumb up ;)"/>
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
