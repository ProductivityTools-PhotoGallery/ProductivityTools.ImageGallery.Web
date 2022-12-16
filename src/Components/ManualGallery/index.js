import React, { useState } from 'react'

function ManualGallery() {
    const [serverImages, setserverImages] = useState([]);

    const getLinks = () => {

        let x = window.innerHeight;
        console.log(x);
        console.log("get from endpoint");
        fetch(`https://localhost:5001/api/Images/List?height=` + x, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(result => { console.log(result); setserverImages(result)});
    }

    const handleClick = function () {
        debugger;
        getLinks();

    }

    return (
        <div>ManualGallery
            <button onClick={handleClick}>zrob</button>
            <div>{serverImages && serverImages.map(x => {
                return (
                    <div>
                        <p>{x.original}</p>
                        <p><img src={x.original}></img></p>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default ManualGallery;