import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {//мы убрали props так как больше нечего не передоём
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
            </div>
        </div>
    );
}

export default App;
