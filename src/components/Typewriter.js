//importing typewriter-effect
import TypeWriterEffect from "react-typewriter-effect";
import React from "react";


const Typewriter = () => {
    return(
        <div className="typewriter">
            <TypeWriterEffect 
                textStyle={{
                    fontFamily: 'Red Hat Display',
                    color:'#FFFFFF',
                    fontWeight: 500,
                    fontSize: '1.5em',
                }}
                startDelay={2000}
                cursorColor='#FFFFFF'
                multiText={[
                    "I am a web developer",
                    "I have a dog named Jhin.",
                    "I am learning Tailwind.",
                    "I am TRAPPED IN THE CODE, PLEASE SEND HELP."
                ]}
                multiTextLoop={true}
                nextTextDelay={100}
                typeSpeed={30}
            />
        </div>
    )
}

export default Typewriter