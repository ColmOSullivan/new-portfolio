
import AnimatedPage from '../components/AnimatedPage';

// The AnimatedPage component prevents Typewriter component from working properly.

const LandingPage = () => {
    return(
    
        <section className='landing-container flex-container card'>
            <AnimatedPage>
                <div className="hero-container">
                    <h1> Colm O'Sullivan</h1>
                </div>
                <article className='landing-article'>
                    <h2>Welcome!</h2>
                    <p>I am a skilled web developer with a background in broadcast television.</p>
                    <p>I have a passion for building creative and accessible web applications, </p>
                </article>
            </AnimatedPage>
        </section>
    )
}

export default LandingPage