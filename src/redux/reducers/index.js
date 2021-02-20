
import {combineReducers} from 'redux';

import getPhotoReducer from "./getPhotoReducer";


const rootReducer = combineReducers({
    roverPhotos: getPhotoReducer,

})

export default rootReducer;
