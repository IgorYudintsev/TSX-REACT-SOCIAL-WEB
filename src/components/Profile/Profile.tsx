import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type iposts={
    id:number,
    message:string,
    likesCount:number
}
export type iprofilePage={
    posts:Array<iposts>
}
type profileState={
    AppGeneralState:iprofilePage,
    addPosts:(post:string)=>void;
}

const Profile = (props:profileState) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePosts={props.AppGeneralState.posts}  addPosts={props.addPosts} />
            </div>
    )
}


export default Profile;

