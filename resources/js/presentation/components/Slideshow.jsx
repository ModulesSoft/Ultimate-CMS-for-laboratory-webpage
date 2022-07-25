import { getImageUri, getThumbUri } from "../../application/common";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Slideshow = ({ slides }) => {
    const { i18n } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(slides[0].id);
    const [play, setPlay] = useState(true);
    useEffect(() => {
        let counter = 0;
        const max = slides.length;
        if (play) {
            var timer = setInterval(() => {
                if (counter < max) {
                    setCurrentSlide(slides[counter].id);
                    counter++;
                } else counter = 0;
            }, 3000);
        }
        return () => {
            clearInterval(timer);
        };
    }, [play]);

    let currentImage = slides.filter((slide) => slide.id === currentSlide)[0];
    let landscape_image = getImageUri(currentImage.landscape_image);
    let portrait_image = getImageUri(currentImage.portrait_image);
    let thumbnail_image = getThumbUri("150x150", currentImage.landscape_image);
    let alt = currentImage.title[i18n.language];
    let link = currentImage.link;
    let title = currentImage.title;
    return (
        <div className="slideshow w3-container w3-center">
            <div className="slideshow__image">
                <a
                    className="w3-panel w3-text-blue  w3-leftbar w3-rightbar w3-border-green"
                    href={link}
                    target="_blank"
                >
                    {title[i18n.language]}
                </a>
                <picture>
                    <source
                        media="(min-width: 728px)"
                        srcSet={landscape_image}
                    />
                    <source media="(min-width: 0px)" srcSet={portrait_image} />
                    <img
                        className="w3-round w3-animate-left"
                        src={thumbnail_image}
                        alt={alt}
                        loading="lazy"
                    />
                </picture>
            </div>
            <div className="slideshow__thumbnail">
                {slides.map((slide) => (
                    <img
                        key={slide.id}
                        className="w3-col w3-border w3-border-green 
                            w3-hover-border-teal w3-shadow w3-round-xxlarge"
                        style={{
                            width: (1 / slides.length) * 100 + "%",
                            cursor: "pointer",
                        }}
                        src={getThumbUri("150x150", slide.landscape_image)}
                        onClick={(e) => {
                            setPlay(false);
                            setCurrentSlide(slide.id);
                        }}
                        loading="lazy"
                        alt={alt + "-thumbnail"}
                    />
                ))}
            </div>
        </div>
    );
};
export default Slideshow;
