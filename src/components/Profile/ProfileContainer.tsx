import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    profileType,
    propsProfileType,
    updateStatus
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
type PathParamsType = {
    userId: any
}
export type initialProfileStateType = MapStateToPropsType & MapDispatchPropsType;
export type RouteComponentPropsType = RouteComponentProps<PathParamsType> & initialProfileStateType

export type MapStateToPropsType = {
    profile: profileType
    status: string
    isAuth:boolean
    autorisedUserId:number | null,
}
export type MapDispatchPropsType = {
    getUserProfile: (userId: any) => void
    getStatus: (userId: any) => void
    updateStatus: (status:string) => void
}

class ProfileContainer extends React.Component<RouteComponentPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            //но появилась проблема-у нас логика зашита в HEADER
            //и получается, что на эту страницу данные приходят раньше
            //чем туда-в итоге: рассинхрон->если обновить страницу,
            //то мы не отрисуемся
            userId =this.props.autorisedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
                 return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

let mapStateToProps = (state:AppStateType) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
    isAuth:state.auth.isAuth,//зарегистрирован ли я?
    autorisedUserId:state.auth.id //берем наш ID
})

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {getUserProfile,getStatus,updateStatus}),
    withRouter)(ProfileContainer)







79 - React JS - stopSubmit (redux-form)
