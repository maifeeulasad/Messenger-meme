import IMessagesProps from "./IMessagesProps";
import {IMessageType} from "./IMessageType";

export default interface IWrapperState{
    displayPicture : String
    messages : Array<IMessagesProps>
    temMessages : Array<String>
    isBulk : Boolean
    temMessage : String
    displayName : String
    //temMessages(type: IMessageType): void;
}
