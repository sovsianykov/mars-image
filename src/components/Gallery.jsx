import ImageGallery from 'react-image-gallery';
import React from "react";
import Row from 'react-bootstrap/Row'
import {useDispatch,useSelector} from "react-redux";
import {fetchPhotos} from "../redux/actions/getPhotos";


const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

const MyGallery = () => {
    const dispatch = useDispatch()

        return (

            <Row>
                <div className="col-md-6">
                    <ImageGallery items={images} />
                </div>

            </Row>




            )

}
export default MyGallery


