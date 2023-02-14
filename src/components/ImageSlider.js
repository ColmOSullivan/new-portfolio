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
            <FaArrowAltCircleLeft aria-label="previous slide button" className="left-arrow" onClick={prevSlide}/>
            
        {SliderData.map((slide, index) => {
            return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    <div className="slide-card">
                        {index === current && <h3 className="project-title">{slide.projectName}</h3>}
                        {index === current && <img className="image" src={slide.image} alt = {slide.altText}/>}
                        {index === current && <p className="project-text">{slide.projectDesc}</p>}
                        <div className="button-container">
                            {index === current && <button className="slider-button"><a href={slide.liveLink}>Live site</a></button>}
                            {index === current && <button className="slider-button"><a href={slide.repoLink}>Repo site</a></button>}
                        </div>
                    </div>
                </div>
                
            )
        })}
        <FaArrowAltCircleRight aria-label="next slide button"className="right-arrow" onClick={nextSlide} />
        </section>
    );
};

export default ImageSlider

/*carosel was created with help from Brian Design: https://www.youtube.com/watch?v=l1MYfu5YWHc */ 