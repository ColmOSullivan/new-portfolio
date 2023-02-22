import SliderData from "./SliderData"
import React, {useState} from "react";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    
    return(
        <section className="slider">
            <h2>Projects</h2>
            <div className="arrow-container flex-container">
                <FaArrowAltCircleLeft aria-label="previous slide button" className="left-arrow" onClick={prevSlide}/>
                <FaArrowAltCircleRight aria-label="next slide button"className="right-arrow" onClick={nextSlide} />
            </div>
            {SliderData.map((slide, index) => {
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        <div className="slide-card flex-container">
                            {index === current && <h3 className="project-title">{slide.projectName}</h3>}
                            {index === current && <img className="image" src={slide.image} alt = {slide.altText}/>}
                            {index === current && <p className="project-text">{slide.projectDesc}</p>}
                            <div className="button-container">
                                {index === current && <a className="slider-button" href={slide.liveLink}>Live site</a>}
                                {index === current && <a className="slider-button" href={slide.repoLink}>Repo site</a>}
                            </div>
                        </div>
                    </div>
                    
                )
            })}
            
        </section>
    );
};

export default ImageSlider

/*carosel was created with help from Brian Design: https://www.youtube.com/watch?v=l1MYfu5YWHc */ 