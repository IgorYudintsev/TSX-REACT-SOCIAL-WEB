import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, profileType, propsProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type PathParamsType = {
    userId: any
}
export type initialProfileStateType = MapStateToPropsType & MapDispatchPropsType;
export type RouteComponentPropsType = RouteComponentProps<PathParamsType> & initialProfileStateType
export type MapStateToPropsType = {
    profile: profileType
    isAuth:boolean

}
export type MapDispatchPropsType = {
    getUserProfile: (userId: any) => void
}

class ProfileContainer extends React.Component<RouteComponentPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        // if(this.props.isAuth==true)return <Redirect to={'/Login'}/>
        // if(this.props.isAuth==false )return <Redirect to={'/Login'}/>

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

// let AuthRedirectComponent=(props:RouteComponentPropsType)=>{
//     if (props.isAuth == false) return <Redirect to={'/Login'}/>
//     return <ProfileContainer {...props}/>
// }
let AuthRedirectComponent=withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
