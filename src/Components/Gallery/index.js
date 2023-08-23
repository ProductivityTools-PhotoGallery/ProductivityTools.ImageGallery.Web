import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import services from '../../Services/api';
import { PhotoAlbum } from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
        <div width="100px">
            <p>galeria:</p>
            <Link to="/">Home</Link>
            <p>{name}</p>
            <PhotoAlbum layout="rows" photos={imageGaleryPhotos}  targetRowHeight={150} onClick={({ index }) => setIndex(index)} spacing={1}  />
            <Lightbox
                slides={imageGaleryPhotos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />

        </div>

    )
}

export default Gallery;