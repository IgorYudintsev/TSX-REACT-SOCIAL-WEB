const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE="SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT"

export type initialStateType = {
    users: Array<usersType>
    pageSize: number
    totalUsersCount: number
    currentPage:number
}
export type usersType = {
    id: number
    photos: {
        small: string,
        large: string
    },
    followed: boolean
    name: string,
    status: string,
    location: { city: string, country: string }
}

let initialState: initialStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,

    currentPage:1
}

const usersReducer = (state: initialStateType = initialState, action: FollowActionType |
    UnFollowActionType | SetUsersActionType | setCurrentPageAC|setTotalUsersCountAC): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(m => {
                    if (m.id === action.userID) {
                        return {...m, followed: true}
                    }
                    return m;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(m => {
                    if (m.id === action.userID) {
                        return {...m, followed: false}
                    }
                    return m;
                })
            };
        case SET_USERS: {
            return {...state, users: [ ...action.users]}
        }
        case SET_CURRENT_PAGE:{
            return {...state,currentPage:action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state,totalUsersCount:action.count}
        }
        default:
            return state;
    }
}

export type FollowActionType = {
    type: 'FOLLOW',
    userID: number
}
export type UnFollowActionType = {
    type: 'UNFOLLOW',
    userID: number
}
export type SetUsersActionType = {
    type: 'SET_USERS',
    users: Array<usersType>
}
export type setCurrentPageAC = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}
export type setTotalUsersCountAC = {
    type: 'SET_TOTAL_USERS_COUNT',
    count: number
}

export let followAC = (userID: number): FollowActionType => ({type: FOLLOW, userID})
export let unfollowAC = (userID: number): UnFollowActionType => {
    return {
        type: UNFOLLOW,
        userID
    }
}
export let setUsersAC = (users: Array<usersType>) => ({type: SET_USERS, users})
export let setCurrentPageAC = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage:currentPage})
export let setTotalUsersCountAC = (totalUsersCount:number) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export default usersReducer;
