import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import services from '../../Services/api';
import ImageGrid from './imageGrid';
import PhotoGallery from './photoGallery';

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

function Gallery() {
    const { name } = useParams();
    const [imageGaleryPhotos, setImageGaleryPhotos] = useState([])

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
            <PhotoGallery photos={imageGaleryPhotos}></PhotoGallery>
        </div>

    )
}

export default Gallery;