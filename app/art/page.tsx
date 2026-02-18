import CharacterShowcase from './CharacterShowcase/CharacterShowcase'
import FanWorks from './Other Works/FanWorks'
import PersonalWorks from './Other Works/PersonalWorks'
import './CharacterDesigner.css'
import Image from 'next/image'

export default function Introduction() { 
    return (
        <>
        <div className='layout-case'>
        <div className='w-100% text-center'><small className='tracking-[.2em]'>Section:</small></div>
        <h6 className='page-name'>Introduction</h6>
            <div className="intro-layout halftone-bg">
                <div className="intro-content1">
                    <div className=''>
                        <h2 className='display-text slide-anim'>Character Designer & Pixel Artist</h2>
                        <small>2d Artist</small>
                    </div>
                </div>

            <div className='intro-content4'>
                <div className='additional-content'>
                    <small>Utilitarian design is an art concept that argues for the products to be designed based on the utility.</small>
                    <small>Brutalism is a style with an emphasis on producing highly imposing, bold, and expressive forms that go against the norm.</small>
                    <small></small>
                    <small></small>
                </div>
            </div>

            <div className="intro-content2 profile-box bounding-box-L">
                    <Image src='/assets/LogoCycle.gif' className='img-box' 
                        width={240} 
                        height={240} 
                        alt='' 
                        priority
                    />
                    <div className='social-box'>
                        <a className='social-link'><Image src='/assets/bluesky.webp' className='icon' width={16} height={16} alt='' priority/>BlueSky</a>
                        <a className='social-link'><Image src='/assets/twitter.webp' className='icon' width={16} height={16} alt='' priority/>X</a>
                        {/* <a className='social-link'><img src='./assets/VGen.webp' className='icon'/> VGen</a> */}
                    </div>
                    <div className='desc-box'>
                        <div className='flex'><small>Description:</small> <div className='hazard-background-thin flex-grow-1 self-center'></div></div>
                        <p>My name is Dale (also know as BruhItsBon) (˶˃ ᵕ ˂˶) and I am an artist that focuses on character design and my main aesthetics are utilitarian, brutalism, and sci-fi.</p>
                        <p></p>
                        <br />
                    </div>
            </div>

            <div className="intro-content3 intro-desc bounding-box-L">
                    <div className='desc-box-mini'>
                        <small>Description:</small>
                        <p>My name is Dale (also know as BruhItsBon) (˶˃ ᵕ ˂˶) and I am an artist that focuses on character design and my main aesthetics are utilitarian, brutalism, and sci-fi.</p>
                        <p></p>
                        <br />
                        <div className='hazard-background'></div>
                    </div>
            </div>
            </div>
        <div className='text-center'><a><small>Scroll down to see my works ↓</small></a></div>
        </div>
        
        <CharacterShowcase />
        <PersonalWorks />
        <FanWorks />
        </>
    )
}