import React from 'react';
import styles from './Users.module.css'
import {FollowActionType, UnFollowActionType, usersType} from "../../redux/users-reducer";

export type initialStateType={
    users:Array<usersType>
    follow:(id:number)=>void
    unfollow:(id:number)=>void
    setUser:(users:Array<usersType>)=>void
}

export const Users = (props: initialStateType) => {

    if(props.users.length===0){
        props.setUser([
            {id: 1, fullName: 'Dmitry',  photoUrl:'https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png', followed: true, status: 'Im a boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, fullName: 'Igor', photoUrl:'https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png', followed: true, status: 'Im a middle', location: {city: 'Moscor', country: 'Russia'}},
            {id: 3, fullName: 'Sasha', photoUrl:'https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png', followed: false, status: 'Im a june', location: {city: 'Kiev', country: 'Ukrain'}},
        ])
    }

    return (
        <div>
            {props.users.map(m => <div key={m.id}>
            <span>
                <div>
                    <img  className={styles.picture} src={m.photoUrl}/>
                </div>
                <div>
                   {m.followed
                       ? <button onClick={() => props.unfollow(m.id)} className={styles.margForBtn}>UNFollow</button>
                       : <button onClick={() => props.follow(m.id)} className={styles.margForBtn}>Follow</button>
                   }
                </div>
            </span>
                <span><div className={styles.marg} >{m.fullName}</div><div className={styles.marg} >{m.status}</div></span>
                <span><div className={styles.marg}>{m.location.country}</div><div className={styles.marg}>{m.location.city}</div></span>
            </div>)}
        </div>
    )
}

export default Users;