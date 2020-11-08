import {combineReducers, createStore,Store} from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer,
    usersPage:usersReducer
});
export type AppStateType = ReturnType<typeof reducers>//это типизация state всего приложения
let store: Store = createStore(reducers);//типизация из redux для Store
//@ts-ignore
window.store=store;
export default store;
