import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';
import { Link, useParams } from 'react-router-dom';
import services from '../../Services/api';
import ImageGrid from './imageGrid';

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

    useEffect(() => {
        const getLinks = async () => {
            let data = await services.getImageUrls(name);
            console.log(data);
            setserverImages(data);
        }
        getLinks();
    }, [name])
    // const getLinks = () => {

    //     let x = window.innerHeight;
    //     console.log(x);
    //     console.log("get from endpoint");
    //     fetch(`https://localhost:5001/api/Images/List?height=` + x, {
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //         .then(response => response.json())
    //         .then(result => setserverImages(result));
    // }



    return (
        <div>
            {/* <button onClick={handleClick}>zrob</button>
            <ImageGallery items={serverImages} /> */}
            <p>galeria:</p>
            <Link to="/">Home</Link>
            <p>{name}</p>
            <ImageGrid serverImages={serverImages} />
        </div>

    )
}

export default Gallery;