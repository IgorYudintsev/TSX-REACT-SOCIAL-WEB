import React from 'react';
import {addPostActionCreator, newPostElementCreator} from "../../../redux/profile-reducer";
import {createStoreType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

// type generalType = {
//     profilePosts: Array<posts>
//     dispatch: (action: any) => void
//     newPostText: string
// }
// type posts = {
//     id: number,
//     message: string,
//     likesCount: number
// }
type storeType = {
    store: createStoreType
}

const MyPostsContainer = (props: storeType) => {
    let state=props.store.getState();
    // let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text:string) => {
        let action=newPostElementCreator(text);
        props.store.dispatch(action)
        // if (newPostElement.current) {
        //     let text = newPostElement.current.value;
        //     props.dispatch(newPostElementCreator(text))
        // }
    }


    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
        // <MyPosts profilePosts={} dispatch={} newPostText={}/>
    )
}

export default MyPostsContainer;


