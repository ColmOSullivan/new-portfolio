//importing typewriter-effect
import TypeWriterEffect from "react-typewriter-effect";
import React from "react";


const Typewriter = () => {
    return(
            <TypeWriterEffect 
                textStyle={{
                    fontFamily: 'inherit',
                    color:'black',
                    fontWeight: 500,
                    fontSize: '1.5em',
                    textAlign: 'center'
                }}
                startDelay={2000}
                cursorColor='black'
                multiText={[
                    "I am a web developer",
                    "I have a dog named Jhin.",
                    "I am learning WordPress.",
                    "I am TRAPPED IN THE CODE, PLEASE SEND HELP."
                ]}
                multiTextLoop={false}
                nextTextDelay={100}
                typeSpeed={30}
            />
    )
}

export default Typewriter