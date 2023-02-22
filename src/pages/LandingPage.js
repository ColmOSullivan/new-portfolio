
import AnimatedPage from '../components/AnimatedPage';

const LandingPage = () => {
    return(
    
        <section className='landing-container flex-container card'>
            <AnimatedPage>
                <div className="hero-container">
                    <h1> Colm O'Sullivan</h1>
                </div>
                <article className='landing-article'>
                    {/* <h2>Welcome!</h2> */}
                    <p>I am a front-end developer and a graduate of Juno College's Web Development bootcamp.</p>
                    <p>Prior to becoming a developer, I worked in broadcast television for most of the major broadcasting companies within Toronto, where I gained strong communication skills in a fast-paced and high-pressure environment.</p>
                    <p>When I'm not working, I enjoy spending time with my family, trying to train my dog, or playing Magic: the Gathering.</p>
                    {/* <p>You may  be wondering how my name is pronouced or more importantly you may be wondering about what I like to do for fun?</p>
                    <p>To answer your first question: Collum or Kullum.</p>
                    <p>To answer your second question: Magic: the gathering and playing video games poorly.</p>
                    <p>Oh...You weren't wondering any of that? Okay, well in addition to all those things you don't care about, I'm also a Front-end developer with a background in broadcast television.</p> */}
                </article>
            </AnimatedPage>
        </section>
    )
}

export default LandingPage