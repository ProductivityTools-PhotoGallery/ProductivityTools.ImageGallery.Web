import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import services from '../../Services/api';
// import ImageGrid from './imageGrid';
// import PhotoGallery from './photoGallery';
import { PhotoAlbum } from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";



function Gallery() {
    const { name } = useParams();
    const [imageGaleryPhotos, setImageGaleryPhotos] = useState([])
    const [index, setIndex] = useState(-1);


    useEffect(() => {
        const getGaleryPhotos = async () => {
            let data = await services.getImageUrls(name);
            console.log("image Gallery photos:");
            console.log(data);
            setImageGaleryPhotos(data);
        }
        getGaleryPhotos();
    }, [name])


    return (
        <div>
            {/* <button onClick={handleClick}>zrob</button>
            <ImageGallery items={serverImages} /> */}
            <p>galeria:</p>
            <Link to="/">Home</Link>
            <p>{name}</p>
            {/* <ImageGrid serverImages={serverImages} /> */}
            <PhotoAlbum layout="rows" photos={imageGaleryPhotos}  targetRowHeight={150} onClick={({ index }) => setIndex(index)}  />
            <Lightbox
                slides={imageGaleryPhotos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />

        </div>

    )
}

export default Gallery;