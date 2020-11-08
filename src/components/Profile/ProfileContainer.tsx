import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";

export type initialProfileStateType = {
    profile:profileType
    setUserProfile:(profile:any)=>void
   }


class ProfileContainer extends React.Component<initialProfileStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/3`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                />
            </div>
        )
    }
}


let mapStateToProps=(state:AppStateType)=>({
    profile:state.profilePage.profile
})


export default connect(mapStateToProps,{setUserProfile}) (ProfileContainer);

