import axios from 'axios'
import {GET_PHOTOS} from "../constants/types";





export const fetchPhotos = () => (dispatch) => {

 let data =  axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=dOh5PZrZhIk0E6uAUeu9TM92CzVuAhHHNvbRpUPf&earth_date=2020-6-3').then(({data}) => {
        dispatch(setPhotos(data));

    });
    console.log(data)
}
export  const setPhotos = (items) => ({
    type: GET_PHOTOS,
    payload: items
});
