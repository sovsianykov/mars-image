import React, {useEffect} from 'react'
import {Carousel, CarouselItem} from "react-bootstrap";
import axios from "axios";
import Curiosity1 from '../assets/img/16142262_401.jpg'
import Curiosity2 from '../assets/img/20170523_sha_z03_456.jpg'
import Curiosity3 from '../assets/img/mars-pano.jpg'

function MyCarousel() {

    useEffect(() => {
        const getData = async (url) => {

            await axios.get(url)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                });
        }
        getData('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=dOh5PZrZhIk0E6uAUeu9TM92CzVuAhHHNvbRpUPf&earth_date=2020-6-3')
    }, [])


    return (<>


    </>)

}
export default MyCarousel
