import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images } from "../Data/ImageList";
import { motion } from "framer-motion";
import { fadeDownAnimationVariants } from "../Data/FadeAnimation";

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const PhotoBook = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);

  return (
    <div id="photo-book">
      <h3 className="title">The Couple</h3>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

export default PhotoBook