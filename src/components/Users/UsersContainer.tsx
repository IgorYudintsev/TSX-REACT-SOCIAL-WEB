import Users from "./Users";
import {connect} from "react-redux";
import {Dispatch, Store} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    unfollowAC,
    setUsersAC,
    usersType,
    setCurrentPageAC,
    setTotalUsersCountAC
} from "../../redux/users-reducer";


function mapStateToProps(state: AppStateType) {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
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
        setCurrentPage:(pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)