import {GET_PHOTOS} from '../constants/types'
const initialState = {
     images : [
         {
             original: 'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01357/opgs/edr/ncam/NRB_517960902EDR_D0542268TRAV00458M_.JPG',
             thumbnail: 'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01357/opgs/edr/ncam/NRB_517960902EDR_D0542268TRAV00458M_.JPG'
         },
         {
             original: 'https://photojournal.jpl.nasa.gov/browse/PIA11155.gif',
             thumbnail: 'https://photojournal.jpl.nasa.gov/browse/PIA11155.gif'
         },


         {
             original: 'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02432/opgs/edr/ncam/NLB_613394813EDR_D0760168TRAV00785M_.JPG',
             thumbnail: 'https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02432/opgs/edr/ncam/NLB_613394813EDR_D0760168TRAV00785M_.JPG'
         }
     ],



}


const photos = (state = initialState,action) => {
    if (action.type = GET_PHOTOS ) {
        return {
            ...state ,
            images: state.images.concat(action.payload)

        }
    }
    return state
}

export default photos


