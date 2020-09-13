import React, {ChangeEvent} from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from './../../redux/dialogs-reducer'
import {StoreType} from '../../redux/store'
import { createStoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";

// type dialogs = {
//     id: number,
//     name: string
// }
// type messages = {
//     id: number,
//     message: string
// }

type DialogGeneralState = {
    store:createStoreType
}

let DialogsContainer = (props: DialogGeneralState) => {
    let state = props.store.getState().dialogsPage

    let newMessageBody = state.newMessageBody
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let updateNewMessageBody = (body:string) => {
        // let body = event.currentTarget.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <Dialogs sendMessage={onSendMessageClick}
                 updateNewMessageBody={updateNewMessageBody}
                 store={props.store}
                 dialogsPage={state}
        />
    )
}

export default DialogsContainer;


//====================================================

// import React, {ChangeEvent} from 'react';
// import s from "./Dialogs.module.css";
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
// import {sendMessageCreator, updateNewMessageBodyCreator} from './../../redux/dialogs-reducer'
// import {StoreType} from '../../redux/store'
// import { createStoreType} from "../../redux/redux-store";
//
// type dialogs = {
//     id: number,
//     name: string
// }
// type messages = {
//     id: number,
//     message: string
// }
//
// type DialogGeneralState = {
//     store:createStoreType
// }
//
// let Dialogs = (props: DialogGeneralState) => {
//
//
//     let state = props.store.getState().dialogsPage
//
//     let newMessageBody = state.newMessageBody
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//     let onNewMessageChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
//         let body = event.currentTarget.value;
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }
//     return (
//         <div className={s.dialogs}>
//             <div className={s.dialogsItems}>
//                 {state.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)}
//             </div>
//
//             <div className={s.messages}>
//                 <div>{state.messages.map(m => <Message message={m.message} id={m.id}/>)}</div>
//                 <div>
//                     <div><textarea
//                         value={newMessageBody}
//                         placeholder={'Enter your message'}
//                         onChange={onNewMessageChange}
//                     ></textarea></div>
//                     <div>
//                         <button onClick={onSendMessageClick}>Send</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default Dialogs;