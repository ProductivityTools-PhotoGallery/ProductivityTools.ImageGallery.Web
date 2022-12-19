import React, { useState } from 'react'
import services from '../../Services/api';


function Home() {
    const [galleries, setGalleries] = useState([]);

    const getLinks = async () => {

        const galleries = await services.getGalleries();
       setGalleries(galleries);
    }

    const handleClick = function () {

        getLinks();
        

    }

    return (
        <div>ManualGallery
            <button onClick={handleClick}>zrob</button>
             <div>{galleries && galleries.map(x => {
                return (
                    <div>
                        <a href={"Gallery/"+x.name}>{x.name}</a>
                    </div>
                )
            })}</div> 
        </div>
    )
}

export default Home;