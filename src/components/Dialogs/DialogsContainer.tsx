import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from './../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

let DialogsContainer = () => {//мы убрали props так как store из контехта 22cт.
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state =store.getState().dialogsPage

                    let newMessageBody = state.newMessageBody
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }
                    let updateNewMessageBody = (body: string) => {

                        store.dispatch(updateNewMessageBodyCreator(body))
                    }
                    return (<Dialogs sendMessage={onSendMessageClick}
                                     updateNewMessageBody={updateNewMessageBody}
                                     store={store}
                                     dialogsPage={state}
                    />)
                }
            }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;


