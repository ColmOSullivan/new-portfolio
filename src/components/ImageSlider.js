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

    console.log(current)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    
    return(
        <section className="slider">
            <FaArrowAltCircleLeft aria-label="previous slide button" className="left-arrow" onClick={prevSlide}/>
            
        {SliderData.map((slide, index) => {
            return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && <h3 className="project-title">{slide.projectName}</h3>}
                    {index === current && <img className="image" src={slide.image} alt = {slide.altText}/>}
                </div>
                
            )
        })}
        <FaArrowAltCircleRight aria-label="next slide button"className="right-arrow" onClick={nextSlide} />
        </section>
    );
};

export default ImageSlider

/*carosel was created with help from Brian Design: https://www.youtube.com/watch?v=l1MYfu5YWHc */ 