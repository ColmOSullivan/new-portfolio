import AnimatedPage from '../components/AnimatedPage';
import {FaLinkedin} from 'react-icons/fa';
import {AiOutlineMail } from 'react-icons/ai'
import Typewriter from '../components/Typewriter';


const Contact = () => {
    return(
        <AnimatedPage>
            <section className='card'>
                <Typewriter/>
                <h2>Please reach out</h2>
                <p>You can reach me via LinkedIn, E-mail or messenger pigeon.</p>
                <p>Here's how you can do those things!</p>
                <AiOutlineMail/>
                <FaLinkedin/>
            </section>
        </AnimatedPage>
    )
}

export default Contact