import './Footer.css'
import Image from 'next/image'

export default function Footer() { 
    return (
        <>
            <div id='footer' className='layout-case footer-section footer-layout'>
                <div className='links1'>
                    <div className='flex'><small>Email:</small> <div className='hazard-background-thin flex-grow-1 self-center'></div></div>
                        <a className='social-link' href='mailto:bruh.itsbonkers0609@gmail.com'>
                            <Image src='/assets/gmail.webp' className='icon' width={16} height={16} alt='' priority/>
                                bruh.itsbonkers0609@gmail.com
                        </a>
                </div>

                <div className='links2'>
                    <div className='flex'><small>Social Media:</small> <div className='hazard-background-thin flex-grow-1 self-center'></div></div>
                        <a className='social-link'><Image src='/assets/bluesky.webp' className='icon' width={16} height={16} alt='' priority/>BlueSky</a>
                        <a className='social-link'><Image src='/assets/twitter.webp' className='icon' width={16} height={16} alt='' priority/>X</a>
                </div>

                <div className='links3'>
                </div>
                
            </div>
        </>
    )
}
