import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type generalType = {
    profilePosts: Array<posts>
    addPosts: (post: string) => void;
}
type posts = {
    id: number,
    message: string,
    likesCount: number
}
const MyPosts = (props: generalType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        props.addPosts(newPostElement.current ? newPostElement.current.value : 'xxx');
        if (newPostElement.current) {
            newPostElement.current.value = ''
        }
    }
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.profilePosts.map(m => <Post message={m.message} likesCount={m.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;


