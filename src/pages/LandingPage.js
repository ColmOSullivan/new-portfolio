import Typewriter from '../components/Typewriter';
import AnimatedPage from '../components/AnimatedPage';

// The AnimatedPage component prevents Typewriter component from working properly.

const LandingPage = () => {
    return(
    
        <section className='landing-container flex-container'>
            <AnimatedPage>
                <div className="hero-container">
                    <h2>Hi, my name is Colm and...</h2>
                    <Typewriter/>
                </div>

                <article className='landing-article'>
                <p>...I also have a passion for entertaining and accessible web content.
                I am a graduate of Juno College of Technology, where I entered a twelve 
                week intensive bootcamp that taught me the skills to make this site you're looking at right now! Also others, which can be found in the projects section. 
                </p>
                <p>I've been working in the world of television broadcasting, where I learned valuable skills such as: communication, problem solving on my own or with a team and, unasked for critiques of your favourite shows or movies.</p>
                </article>
            </AnimatedPage>
        </section>
    )
}

export default LandingPage