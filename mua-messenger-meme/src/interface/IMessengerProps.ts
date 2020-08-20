import IMessagesProps from "./IMessagesProps";

export default interface IMessengerProps{
    displayName : String,
    displayImage : string,
    messages :  Array<IMessagesProps>,
    isActive? : Boolean,
}
