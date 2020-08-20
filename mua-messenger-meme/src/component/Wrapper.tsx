import React, {ChangeEvent} from 'react';
import Messenger from "./Messenger";
import {IMessageType} from "../interface/IMessageType";
import IWrapperState from "../interface/IWrapperState";
import IWrapperProps from "../interface/IWrapperProps";

class Wrapper extends React.Component<IWrapperProps, IWrapperState> {

    state = {
        temMessage: '',
        messages: [],
        temMessages: [],
        isBulk: true,
        displayPicture: "https://avatars3.githubusercontent.com/u/29339330?s=460&u=adb4c9845d1c063c9d71843bc0d56cebf7f46e5b&v=4",
        displayName : 'Name'
    };

    message = (type: IMessageType) => {
        this.setState({
            messages: [...this.state.messages, {
                messages: this.state.isBulk ? this.state.temMessages : this.state.temMessage === '' ? [] : [this.state.temMessage],
                messageType: type
            }]
        })
    };

    onDisplayPictureChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value!=='')
            this.setState({displayPicture: e.target.value});
        else
            this.setState({displayPicture:"https://avatars3.githubusercontent.com/u/29339330?s=460&u=adb4c9845d1c063c9d71843bc0d56cebf7f46e5b&v=4"});
    };

    onMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({temMessage: e.target.value})
    };

    onDisplayNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({displayName: e.target.value})
    };

    onBulkChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({isBulk: e.target.checked});
    };

    bulkAdd = () => {
        if (this.state.isBulk && this.state.temMessage)
            this.setState({temMessages: [...this.state.temMessages, this.state.temMessage]})
    };

    clearBulk = () => {
        this.setState({temMessages: []});
    };

    render() {
        return (<div className={"side"}>
            <div className={"side-left"}>
                <div>
                <input
                    placeholder={"Message"}
                    onChange={(e) => {
                        this.onMessageChange(e)
                    }}/>
                </div>
                <div>
                    <input
                        placeholder={"Display Picture URL"}
                        onChange={(e) => {
                            this.onDisplayPictureChange(e)
                        }}/>
                </div>
                <div>
                    <input
                        placeholder={"Display Name"}
                        onChange={(e) => {
                            this.onDisplayNameChange(e)
                        }}/>
                </div>
                <button onClick={() => {
                    this.message(IMessageType.Sent)
                }}>Send
                </button>
                <button onClick={() => {
                    this.message(IMessageType.Received)
                }}>Receive
                </button>
                <label>Is Bulk</label>
                <input checked={this.state.isBulk} onChange={(e) => this.onBulkChange(e)} type={"checkbox"}/>
                {
                    this.state.isBulk && <div>
                        <button onClick={() => {
                            this.clearBulk()
                        }}>Clear Bulk
                        </button>
                        <button onClick={() => {
                            this.bulkAdd()
                        }}>Bulk Add
                        </button>
                        {this.state.temMessages.map((message) => {
                            return (<li>{message}</li>)
                        })}
                    </div>
                }
            </div>
            <div className={"side-right"}>
                <Messenger
                    displayName={this.state.displayName}
                    displayImage={this.state.displayPicture}
                    messages={this.state.messages}/>
            </div>
        </div>);
    }
}

export default Wrapper;
