import ImageGallery from 'react-image-gallery';
import React, {useEffect} from "react";
import Row from 'react-bootstrap/Row'
import {useDispatch,useSelector} from "react-redux";
import {fetchPhotos} from "../redux/actions/getPhotos";
import {Button, Form,} from "react-bootstrap";


// let marsphotos = [
//     {
//         original: 'https://picsum.photos/id/1018/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1015/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1019/1000/600/',
//         thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
// ]
let urls =[]

const MyGallery = () => {
    const dispatch = useDispatch()
 let   marsphotos = useSelector(
     state =>
         state.roverPhotos.images.splice(3,1)


    )
      marsphotos = useSelector(
        state =>
            state.roverPhotos.images


    )


    console.log( marsphotos)
    // useEffect(dispatch(fetchPhotos())  )
    // console.log(marsphotos)
    // const urlArray = () => {
    //     marsphotos.photos.map((el,i) => {
    //         urls[i] = { original: el.img_src , thumbnail: 'https://picsum.photos/id/1019/250/150/'
    //         }
    //         images.push(urls[i])
    //     })
    //
    // }

        return (

            <Row>
                <div className="col-md-6">
                <ImageGallery items={marsphotos} />
            </div>
                <div className="col-md-1 mt-3">
                    <button onClick={() => {
                        dispatch(fetchPhotos())

                    }}>DOWNLOAD DATA</button>
                    {/*<button onClick={urlArray}>DATA</button>*/}
                </div>
                <div className="col-md-4 mt-3">
                    <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Input date</Form.Label>
                        <Form.Control type="date" placeholder="date of photos" />
                    </Form.Group>

                    <Button variant="info" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>


            </Row>




            )

}
export default MyGallery


