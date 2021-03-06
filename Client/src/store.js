import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
    SignupReducer,
    SigninReducer,
    GetMenuReducer,
    MakeOrderReducer,
    GetHistoryReducer,
    GetAllOrdersReducer,
    AcceptOrdersReducer,
    DeclineOrdersReducer,
    CompleteOrdersReducer,
    CloudinaryReducer,
    UpdateMenuReducer,
    PopulateMenuReducer,
    DeletedMenuReducer
} from './reducers/index';


const rootReducer = combineReducers({
    signup: SignupReducer,
    signin: SigninReducer,
    getmenu: GetMenuReducer,
    makeorder: MakeOrderReducer,
    orderhistory: GetHistoryReducer,
    getorders: GetAllOrdersReducer,
    acceptorders: AcceptOrdersReducer,
    declineorders: DeclineOrdersReducer,
    completeorders: CompleteOrdersReducer,
    cloudinary: CloudinaryReducer,
    updatedmenu: UpdateMenuReducer,
    addedtomenu:  PopulateMenuReducer,
    deletedfrommenu: DeletedMenuReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;