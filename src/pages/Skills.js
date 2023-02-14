import AnimatedPage from '../components/AnimatedPage';
import Typewriter from '../components/Typewriter';
import {FaSass, FaCss3Alt, FaJsSquare} from 'react-icons/fa';
import {ImHtmlFive} from 'react-icons/im'


const Skills = () => {
    return(
        <AnimatedPage>
            <section id="skills" class="skillSection card">
            <Typewriter/>
        <div class="skills-container wrapper flex-container">
          <div class="skillText flex-container">
            <h3>Skills</h3>
          </div>
          <div class="skillList">
            <div class="skillIcon">
              <i class="fa-brands fa-html5"></i>
              <span class="skillText">HTML5</span>
            </div>
            <div class="skillIcon">
              <i class="fa-brands fa-css3-alt"></i>
              <span class="skillText">CSS3</span>
            </div>
            <div class="skillIcon">
              <i class="fa-brands fa-sass"></i>
              <span class="skillText">Sass</span>
            </div>
            <div class="skillIcon">
              <i class="fa-brands fa-square-js"></i>
              <span class="skillText">JavaScript</span>
            </div>
            <div class="skillIcon">
              <i class="fa-brands fa-react"></i>
              <span class="skillText">React</span>
            </div>
            <div class="skillIcon">
              <i class="devicon-firebase-plain"></i>
              <span class="skillText">Firebase</span>
            </div>
            <div class="skillIcon">
              <i class="fa-brands fa-github"></i>
              <span class="skillText">Github</span>
            </div>
            <div class="skillIcon">
              <i class="fa-solid fa-terminal"></i>
              <span class="skillText">Terminal</span>
            </div>
            <div class="skillIcon">
              <i class="fa-solid fa-bug-slash"></i>
              <span class="skillText">Debugging</span>
            </div>
            <div class="skillIcon">
              <i class="fa-solid fa-mobile"></i>
              <span class="skillText">Web accessibility</span>
            </div>
            <div class="skillIcon">
              <i class="fa-sharp fa-solid fa-tower-cell"></i>
              <span class="skillText">Communication</span>
            </div>
            <div class="skillIcon">
              <i class="fa-solid fa-people-group"></i>
              <span class="skillText">Paired programming</span>
            </div>
          </div>
        </div>
      </section>
        </AnimatedPage>
    )
}

export default Skills