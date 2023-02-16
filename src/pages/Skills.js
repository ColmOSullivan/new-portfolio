import AnimatedPage from '../components/AnimatedPage';

const Skills = () => {
    return(
        <AnimatedPage>
          <section id="skills" className="skillSection card">
            <div className="skills-container flex-container">
                <h3>Skills</h3>
                <ul className='skillList'>
                  <li>
                    <i class="fa-brands fa-html5"></i>
                    <p class="skillText">HTML5</p>
                  </li>
                  <li>
                    <i class="fa-brands fa-css3-alt"></i>
                    <p class="skillText">CSS3</p>
                  </li>
                  <li>
                    <i class="fa-brands fa-sass"></i>
                    <p class="skillText">Sass</p>
                  </li>
                  <li>
                    <i class="fa-brands fa-square-js"></i>
                    <p class="skillText">JavaScript</p>
                  </li>
                  <li>
                    <i class="fa-brands fa-react"></i>
                    <p class="skillText">React</p>
                  </li>
                  <li>
                    <i class="fa-brands fa-github"></i>
                    <p class="skillText">Github</p>
                  </li>
                  <li>
                    <i class="devicon-firebase-plain"></i>
                    <p class="skillText">Firebase</p>
                  </li>
                  <li>
                    <i class="fa-solid fa-terminal"></i>
                    <p class="skillText">Terminal</p>
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-tower-cell"></i>
                    <p class="skillText">Communication</p>
                  </li>
                  <li>
                    <i class="fa-solid fa-mobile"></i>
                    <p class="skillText">Web accessibility</p>
                  </li>
                </ul>
            </div>
          </section>
        </AnimatedPage>
    )
}

export default Skills