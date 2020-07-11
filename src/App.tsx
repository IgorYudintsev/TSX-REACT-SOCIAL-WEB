import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";

export type idialogs = {
    id: number,
    name: string
}
export type imessages = {
    id: number,
    message: string
}
export type idialogsPage = {
    messages: Array<imessages>
    dialogs: Array<idialogs>,
}
export type iposts={
    id:number,
    message:string,
    likesCount:number
}
export type iprofilePage={
    posts:Array<iposts>
}
export type isidebar={}
export type Apstate={
    profilePage:iprofilePage,
    dialogsPage:idialogsPage,
    sidebar:isidebar
}
type generalState={
    state:Apstate,
    addPosts:(post:string)=>void;
}


const App = (props:generalState  ) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs AppGeneralStateForDialogs={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile
                        AppGeneralState={props.state.profilePage}
                        addPosts={props.addPosts}
                    />}/>
                </div>
            </div>
      );
}

export default App;
