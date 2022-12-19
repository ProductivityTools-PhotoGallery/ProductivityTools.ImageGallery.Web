import React, { useState } from 'react'
import services from '../../Services/api';


function Home() {
    const [Home, setGalleries] = useState([]);

    const getLinks = () => {

        const galleries = services.getGalleries();
        setGalleries(galleries);
    }

    const handleClick = function () {
        debugger;
        getLinks();

    }

    return (
        <div>ManualGallery
            <button onClick={handleClick}>zrob</button>
            <div>{Home && Home.map(x => {
                return (
                    <div>
                        <p>{x}</p>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default Home;