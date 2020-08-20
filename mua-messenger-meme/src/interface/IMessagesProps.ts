import {IMessageType} from "./IMessageType";

export default interface IMessagesProps {
    messages : Array<String>,
    time?:String,
    messageType : IMessageType,
    isRemoved? :Boolean,
}
