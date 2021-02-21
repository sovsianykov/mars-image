import ImageGallery from 'react-image-gallery';
import React from "react";
import Row from 'react-bootstrap/Row'
import {useDispatch,useSelector} from "react-redux";
import {fetchPhotos} from "../redux/actions/getPhotos";





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


        return (

            <Row>
                <div className="col-md-6">
                <ImageGallery items={marsphotos} />
            </div>
                <div className=" col-md-1 mt-3">
                    <button className='btn btn-outline-warning' onClick={() => {
                        dispatch(fetchPhotos())

                    }}>DOWNLOAD DATA</button>
                    {/*<button onClick={urlArray}>DATA</button>*/}
                </div>
                <div className=" imageHolder col-md-4 mt-3">
                    <img src="https://www.google.com/search?q=mars+rover+2020&rlz=1C1GCEA_enUA915UA915&sxsrf=ALeKk01N5zCe1jVBej2_-cdcnWl1acN9Pw:1613941137717&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiQss6h7_vuAhVmyoUKHaUPDGIQ_AUoAXoECAwQBA&biw=1920&bih=937#imgrc=1UfIGSDPt6aLNM" alt=""/>

                </div>


            </Row>




            )

}
export default MyGallery


