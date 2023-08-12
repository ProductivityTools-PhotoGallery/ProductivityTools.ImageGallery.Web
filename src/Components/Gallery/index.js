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
    const [serverImages, setserverImages] = useState([]);
    const [imageGaleryPhotos, setImageGaleryPhotos] = useState([])

    useEffect(() => {
        const getLinks = async () => {
            let data = await services.getImageUrls(name);
            console.log(data);
            setserverImages(data);
        }
        getLinks();
    }, [name])

    useEffect(()=>{
        var result = [];
        serverImages.forEach(x => {
            result.push({ src: x.original, width: x.width, height: x.height });

        })
        console.log(result)
        setImageGaleryPhotos(serverImages);
    },[serverImages])


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