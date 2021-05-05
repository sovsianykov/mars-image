
import {GET_PHOTOS} from "../constants/types";
import music from "../../land.mp3";


let date = new Date()
// eslint-disable-next-line no-useless-concat
let  now = `${date.getFullYear()}` + '-' + `${date.getMonth()}` + '-' + `${date.getDate()}`
const   audio = new Audio(music)


export function fetchPhotos()



{   return  async dispatch =>

    {
     await   audio.play()
          let urls = []
         await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=dOh5PZrZhIk0E6uAUeu9TM92CzVuAhHHNvbRpUPf&earth_date='+ `${now}`)
            .then(response => response.json())
            .then(response => response.photos.map((el,i) => {
                return urls[i] = { original: el.img_src , thumbnail: el.img_src
                }}))
        console.log(urls)


        dispatch({type: GET_PHOTOS, payload : urls})



    }
}
