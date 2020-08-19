import {MessageType} from "./MessageType";

export default interface IMessagesProps {
    messages : Array<String>,
    time?:String,
    messageType : MessageType,
    isRemoved? :Boolean,
}
