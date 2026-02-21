import './About.css'
import Image from 'next/image'

function About() { 
    return (
        <>
        <div className='layout-case'>
            <small className='about-section'>Section:</small>
            <h1>About Me</h1>
            <div className='about-layout'>
                <div className='about-me1'>
                    <div>
                    <Image className='bounding-box-L' src='./assets/BunnyIcon.svg' width={400} height={650} alt=''/> <small>You can call me: Dale, Bon</small>
                    </div>
                </div>
                <div className='about-me2'>
                    <div className='about-description'>
                        <h6>Background</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, sunt. Eos libero magni fugit dolores nemo optio eius explicabo, velit quisquam expedita ipsa dignissimos, eaque delectus exercitationem iure accusantium nostrum!</p>
                        <br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, sunt. Eos libero magni fugit dolores nemo optio eius explicabo, velit quisquam expedita ipsa dignissimos, eaque delectus exercitationem iure accusantium nostrum!</p>
                    </div>
                    <div className='about-hobbies'>
                        <h6>Hobbies</h6>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About