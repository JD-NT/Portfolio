import CharacterShowcase from './CharacterShowcase/CharacterShowcase'
import FanWorks from './Other Works/FanWorks'
import PersonalWorks from './Other Works/PersonalWorks'
import './CharacterDesigner.css'
import Image from 'next/image'
import { Metadata } from 'next'

export default function Introduction() { 
    return (
        <>
        <section className='layout-case'>
                <div className='mobile-hidden'>
                    <div className='flex justify-between'>
                        <div className='flex'><Image src='/assets/sprite.webp' draggable='false' width={40} height={16} alt=''/><small>Section: <br /> Introduction</small></div>
                        <div className='flex'><small>Welcome to<br /> my Website</small></div>
                        <div className='flex'><small>Portfolio <br /> of Dale</small></div>
                        <div className='flex'><Image src='/assets/halftone.png' draggable='false' width={40} height={16} alt=''/><Image src='/assets/halftone.png' draggable='false' width={40} height={16} alt='' /></div>
                    </div>
                </div>

                <hr />
                <div className="intro-layout halftone-bg">
                        <div className="intro-content1">
                            <div className='plus top-[-10px] right-[-10px]'><Image src='/assets/plus.png' draggable='false' width={40} height={16} alt=''  /></div>
                            <div className='plus top-[-10px] left-[-10px]'><Image src='/assets/plus.png' draggable='false' width={40} height={16} alt=''  /></div>
                            <div className=''>
                                <h1 className='display-text slide-anim'>Character Designer & Pixel Artist</h1>
                                <small>2d Artist</small>
                            </div>
                        </div>

                    <div className='intro-content4'>
                        <div className='additional-content'>
                            <small>Utilitarian design is an art concept that argues for the products to be designed based on the utility.</small>
                            <small>Brutalism is a style with an emphasis on producing highly imposing, bold, and expressive forms that go against the norm.</small>
                            <div className='aspect-square'><Image src='/assets/diagonalarrow.png' draggable='false' width={80} height={80} alt=''  /></div> 
                            <small></small>
                        </div>
                    </div>

                    <div className="intro-content2 profile-box bounding-box-L">
                            <Image src='/assets/BunnyIcon.webp' draggable='false' className='img-box' 
                                width={240} 
                                height={240} 
                                alt='A pixel art logo of a bunny' 
                            />
                            <div className='social-box'>
                                <a className='social-link' href='mailto:bruh.itsbonkers0609@gmail.com' target='_blank'><Image src='/assets/icons/gmail.webp' draggable='false' className='icon' width={16} height={16} alt=''/>Email</a>
                                <a className='social-link' href='https://bsky.app/profile/bruhitsbon.bsky.social' target='_blank'><Image src='/assets/icons/bluesky.webp' draggable='false' className='icon' width={16} height={16} alt='' />BlueSky</a>
                                <a className='social-link' href='https://x.com/BruhItsBon' target='_blank'><Image src='/assets/icons/twitter.webp' draggable='false' className='icon' width={16} height={16} alt='' />X</a>
                                {/* <a className='social-link'><img src='./assets/VGen.webp' className='icon'/> VGen</a> */}
                            </div>
                            <div className='desc-box'>
                                <div className='flex'><small>Description:</small> <div className='hazard-background-thin flex-grow-1 self-center'></div></div>
                                <p>My name is Dale (also know as Bon) (≧∇≦)ﾉ and I am an artist that focuses on character design and my main aesthetics are utilitarian, brutalism, and sci-fi.</p>
                                <p></p>
                                <br />
                            </div>
                    </div>

                    <div className="intro-content3 intro-desc bounding-box-L">
                            <div className='desc-box-mini'>
                                <small>Description:</small>
                                <p>My name is Dale (also know as BruhItsBon) (≧∇≦)ﾉ and I am an artist that focuses on character design and my main aesthetics are utilitarian, brutalism, and sci-fi.</p>
                                <div className='hazard-background-thin'></div>
                            </div>
                    </div>
                </div>
            <div className='text-center'><a><small>Scroll down to see more of my works（￣︶￣）↓</small></a></div>
        </section>
        
        <CharacterShowcase />
        <PersonalWorks />
        <FanWorks />
        </>
    )
}