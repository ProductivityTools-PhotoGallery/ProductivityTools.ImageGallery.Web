import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { PhotoAlbum } from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function PhotoGallery({ photos }) {
  // const [currentImage, setCurrentImage] = useState(0);
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const [index, setIndex] = useState(-1);
  useEffect(() => {
    console.log("photos photo gallery")
    console.log(photos);
    
}, [photos])

  return (
    <div>
      <p>photogallery:</p>
      <PhotoAlbum photo={photos} layout="rows"  />
      <p>photogallery end:</p>
      {/* <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      /> */}
    </div>
  );
}

export default PhotoGallery;
