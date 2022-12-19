import React, { useEffect, useState } from 'react'
import services from '../../Services/api';


function Home() {
    const [galleries, setGalleries] = useState([]);


    useEffect(() => {
        const getLinks = async () => {

            const galleries = await services.getGalleries();
            setGalleries(galleries);
        }
        getLinks();
    }, [])


    return (
        <div>ManualGallery
            <div>{galleries && galleries.map(x => {
                return (
                    <div>
                        <a href={"Gallery/" + x.name}>{x.name}</a>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default Home;