import './About.css'
import Image from 'next/image'

function About() { 
    return (
        <>
        <div className='layout-case'>
            <small className='about-section'>Section:</small>
            <h3>//About Me</h3>
            <div className='about-layout'>
                <div className='about-me1'>
                    <div>
                        <div className='bounding-box-L flex justify-center'> <Image className='' src='/assets/pfp/MePixel.png' draggable='false' width={400} height={650} alt='' unoptimized/> </div>
                        <small>You can call me: Dale, Bon</small>
                    </div>
                </div>
                <div className='about-me2'>
                    <div className='about-description'>
                        <h6>Background:</h6>
                        <small>
                            Bon is a pixel artist from the Philippines that likes everything sci-fi related, especially robots and mechs. 
                            I have been doing pixel art for a couple of years now, while I mostly draw OCs, I occasionally try to draw and learn landscapes and other cool stuff. ~(￣▽￣)~
                            <br /><br />
                            I really like using emoticons cause I think they're cute and fun to use, also makes it so that people can know my tone in messages. (⌒▽⌒)
                            <br /><br />
                            I mostly play single-player games and my favorite game genres are Metroidvanias and Survival games. ♪(´▽｀)
                            <br /><br />
                            My favorite animes are Love Live!, Yuru Camp and Gundam. If you draw Nozomi Tojo, feel free to show it to me (please) (. ❛ ᴗ ❛.)
                        </small>
                    </div>
                    <div className='about-hobbies'>
                        <h6>Things I can do:</h6>
                        <small>Illustrator, Graphic Design, Wireframing, Programming.</small>
                        <br /><br />
                        <h6>Other Interests:</h6>
                        <small>Building Model Kits (Hopefully I start customizing one soon ⚆_⚆), Journaling, Collecting Stationaries.</small>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About