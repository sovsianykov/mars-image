import {GET_PHOTOS} from '../constants/types'
const initialState = {
    items: [],
    isLoaded : false
}
const photos = (state = initialState,action) => {
    if (action.type = GET_PHOTOS ) {
        return {
            ...state ,
            items : action.payload

        }
    }
    return state
}

export default photos


