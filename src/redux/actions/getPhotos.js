import axios from 'axios'
import {GET_PHOTOS} from "../constants/types";





export function fetchPhotos()
{   return  async dispatch =>

    {
          let urls = []
         await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=dOh5PZrZhIk0E6uAUeu9TM92CzVuAhHHNvbRpUPf&earth_date=2020-6-3')
            .then(response => response.json())
            .then(response => response.photos.map((el,i) => {
                return urls[i] = { original: el.img_src , thumbnail: el.img_src
                }}))
        console.log(urls)


        dispatch({type: GET_PHOTOS, payload : urls})



    }
}
