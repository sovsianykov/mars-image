
import {combineReducers} from 'redux';

import getPhotoReducer from "./getPhotoReducer";


const rootReducer = combineReducers({
    getPhoto: getPhotoReducer,

})

export default rootReducer;
