import AnimatedPage from '../components/AnimatedPage';
import {FaLinkedin} from 'react-icons/fa';
import {AiOutlineMail } from 'react-icons/ai'
import Typewriter from '../components/Typewriter';


const Contact = () => {
    return(
        <AnimatedPage>
            <section className='contact-section flex-container card'>
                
                <h2>Please reach out</h2>
                {/* <Typewriter/> */}
                <p>You can reach me via LinkedIn, E-mail or messenger pigeon.</p>
                <p>Here's how you can do those things!</p>
                <div className="icon-container flex-container">
                    <a className='contact-icon' href="https://www.linkedin.com/in/colm-o-sullivan-9163baa6/"><FaLinkedin/></a>
                    <a className='contact-icon' href="malito:colm.osullivan1@gmail.com"><AiOutlineMail/></a>
                </div>
            </section>
        </AnimatedPage>
    )
}

export default Contact