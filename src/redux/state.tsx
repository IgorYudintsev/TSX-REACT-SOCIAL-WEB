import React from 'react';
// import {rerenderEntireTree} from "../render";

let rerenderEntireTree=(state:istate)=>{
    console.log('hellow')
}

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
    newPostText:string
}

export type isidebar={}

export type istate={
    profilePage:iprofilePage,
    dialogsPage:idialogsPage,
    sidebar:isidebar
}

 let state:istate = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 10},
            {id: 2, message: 'How are you?', likesCount: 100},
        ],
        newPostText:'it-kamasutra.com'
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yoo'},
            {id: 4, message: 'How are you?'},
            {id: 5, message: 'Yoo'},
        ],
        dialogs: [
            {id: 1, name: 'Dimach'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Igor'},
            {id: 4, name: 'Olga'},
            {id: 5, name: 'Nadzeika'},
        ],
    },
    sidebar: {}
}

export let addPosts=()=>{
    let newPost={
        id:5,
        message:state.profilePage.newPostText,
        likesCount:0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    // rerenderEntireTree(state)
    rerenderEntireTree(state)
}

export let updateNewPostText=(newText:string)=>{
    state.profilePage.newPostText=newText;
    // rerenderEntireTree(state);
    rerenderEntireTree(state);
}

export const subscribe=(observer:(state:istate)=>void)=>{
    rerenderEntireTree=observer
}

export default state;

//======================
// import React from 'react';
// // import {rerenderEntireTree} from "../render";
//
// let rerenderEntireTree=()=>{
//     console.log('hellow')
// }
//
// export type idialogs = {
//     id: number,
//     name: string
// }
// export type imessages = {
//     id: number,
//     message: string
// }
// export type idialogsPage = {
//     messages: Array<imessages>
//     dialogs: Array<idialogs>,
// }
//
// export type iposts={
//     id:number,
//     message:string,
//     likesCount:number
// }
// export type iprofilePage={
//     posts:Array<iposts>
//     newPostText:string
// }
//
// export type isidebar={}
//
// export type istate={
//     profilePage:iprofilePage,
//     dialogsPage:idialogsPage,
//     sidebar:isidebar
// }
//
// let state:istate = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hi', likesCount: 10},
//             {id: 2, message: 'How are you?', likesCount: 100},
//         ],
//         newPostText:'it-kamasutra.com'
//     },
//     dialogsPage: {
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How are you?'},
//             {id: 3, message: 'Yoo'},
//             {id: 4, message: 'How are you?'},
//             {id: 5, message: 'Yoo'},
//         ],
//         dialogs: [
//             {id: 1, name: 'Dimach'},
//             {id: 2, name: 'Sasha'},
//             {id: 3, name: 'Igor'},
//             {id: 4, name: 'Olga'},
//             {id: 5, name: 'Nadzeika'},
//         ],
//     },
//     sidebar: {}
// }
//
// export let addPosts=()=>{
//     let newPost={
//         id:5,
//         message:state.profilePage.newPostText,
//         likesCount:0
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText='';
//     // rerenderEntireTree(state)
//     rerenderEntireTree()
// }
//
// export let updateNewPostText=(newText:string)=>{
//     state.profilePage.newPostText=newText;
//     // rerenderEntireTree(state);
//     rerenderEntireTree();
// }
//
// export const subscribe=(observer:(state:istate)=>void)=>{
//     rerenderEntireTree=observer
// }
//
// export default state;