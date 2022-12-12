import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return(
        <section>
            <div className="hero-container">
        <TypeWriterEffect
           textStyle={{ fontFamily: 'Red Hat Display' }}
           startDelay={100}
           cursorColor="black"
           text="This is a single text"
           typeSpeed={100}
           scrollArea={LandingPage}
         />
            </div>
            <Link to="/">
                <button>Enter site</button>
            </Link>
        </section>
    )
}

export default LandingPage