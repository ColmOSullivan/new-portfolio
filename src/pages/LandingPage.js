import Typewriter from '../components/Typewriter';
// import AnimatedPage from '../components/AnimatedPage';

// The AnimatedPage component prevents Typewriter component from working properly.

const LandingPage = () => {
    return(
    // <AnimatedPage>
        <section className='landing-container flex-container'>
            <div className="hero-container">
                <h2>Hi, my name is Colm and...</h2>
                <Typewriter/>
            </div>

            <article className='landing-article'>
              <p>...I also have a passion for entertaining and accessible web content.
              I am a graduate of Juno College of Technology, where I entered a twelve 
              week intensive bootcamp that taught me the skills to make this site you're looking at right now! Also others, which can be found in the projects section. 
              </p>
              <p>I've been working in the world of television broadcasting, where I learned valuable skills such as: communication, problem solving on my own or with a team, curiosity and, unasked for critiques of your favourite shows and/or movies.</p>
              <p>Outside of coding and a passionate distaste for reality TV, I like to spend my time reading sci-fi and fantasy books, playing video games poorly, avoiding the deep dreadful darkness that lays within calling out to me, walking my dog and, learning new recipes!</p>
              <p>Please keep browsing my site, I've tried my best to elimate scrolling, so if you find a place where there is scrolling, please screenshot it and taunt me with my failure via email, LinkedIn or telepathic messages.</p>
            </article>
        </section>
    // </AnimatedPage>
    )
}

export default LandingPage