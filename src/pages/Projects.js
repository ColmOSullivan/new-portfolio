import AnimatedPage from '../components/AnimatedPage';
import ImageSlider from '../components/ImageSlider';
import SliderData from '../components/SliderData';

const Projects = () => {
    return(
        <AnimatedPage>
            <section className='projects-section'>
                <div className='carousel'>
                    <ImageSlider slides={SliderData}/>
                </div>
            </section>
        </AnimatedPage>
    )
}

export default Projects