import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC,
    usersType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import preloader from './../../assets/images/preloader.svg'
import styles from './Users.module.css'
import {Preloader} from "../common/Preloader/Preloader";

export type initialStateType = {
    users: Array<usersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    setUser: (users: Array<usersType>) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalUserscount: number) => void,
    isFetching: boolean
    toggleIsFetching:(isFetching:boolean)=>void
}

class UsersContainer extends React.Component<initialStateType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUser(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount);
                console.log(response)
            })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items)
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    pageSize={this.props.pageSize}
                    totalUserscount={this.props.totalUsersCount}
                    onPageChange={this.onPageChange}
                    currentPage={this.props.currentPage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    users={this.props.users}
                />
            </>
        )
    }
}

function mapStateToProps(state: AppStateType) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUser: (users: Array<usersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);