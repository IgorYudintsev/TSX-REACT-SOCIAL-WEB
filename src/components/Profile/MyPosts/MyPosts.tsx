import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type generalType={
    profilePosts:Array<posts>
}
type posts = {
    id:number,
    message: string,
    likesCount: number
}

const MyPosts = (props:generalType) => {
    // let posts = [
    //     {id: 1, message: 'Hi', likesCount: 10},
    //     {id: 2, message: 'How are you?', likesCount: 100},
    // ]

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {props.profilePosts.map(m => <Post message={m.message} likesCount={m.likesCount}/>)}
              </div>
        </div>
    )
}

export default MyPosts;


