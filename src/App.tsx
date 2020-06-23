import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";

type generalType={
    dialogs:Array<dialogs>,
    messages:Array<messages>
    posts:Array<posts>
}

type dialogs={
    id:number,
    name:string
}

type messages = {
    id:number,
    message:string
}

type posts = {
    id:number,
    message: string,
    likesCount: number
}


const App = (props:generalType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />}/>
                    <Route path='/profile' render={() => <Profile appPosts={props.posts} />}/>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;