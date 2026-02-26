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
                        <div className='bounding-box-L flex justify-center'> <Image className='' src='/assets/MePixel.png' width={400} height={650} alt='' unoptimized/> </div>
                        <small>You can call me: Dale, Bon</small>
                    </div>
                </div>
                <div className='about-me2'>
                    <div className='about-description'>
                        <h6>Background:</h6>
                        <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, sunt. Eos libero magni fugit dolores nemo optio eius explicabo, velit quisquam expedita ipsa dignissimos, eaque delectus exercitationem iure accusantium nostrum!</small>
                        <br />
                        <br />
                        <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, sunt. Eos libero magni fugit dolores nemo optio eius explicabo, velit quisquam expedita ipsa dignissimos, eaque delectus exercitationem iure accusantium nostrum!</small>
                    </div>
                    <div className='about-hobbies'>
                        <h6>Other things I can do:</h6>
                        <small>Pixel Art, Graphic Design, Wireframing, Programming</small>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About