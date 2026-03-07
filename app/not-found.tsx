import './globals.css'
import Image from 'next/image'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
    return(
        <>
        <div className='layout-case text-center'>
        
        <div className='mobile-hidden'>
                <div className='flex justify-between text-start'>
                    <div className='flex'><Image className='rotate-45' src='/assets/plus.png' width={40} height={16} alt='' priority /><small>Section: <br /> Error</small></div>
                    <div className='flex'><small>Please return to <br /> working links</small></div>
                </div>
        </div>

            <div className='flex flex-col justify-around h-[85dvh]'>
            <div className='relative'>
                <div className='plus top-[-10px] right-[-10px]'><Image src='/assets/plus.png' width={40} height={16} alt='' priority /></div>
                <div className='plus top-[-10px] left-[-10px]'><Image src='/assets/plus.png' width={40} height={16} alt='' priority /></div>
            </div>

            <div className='text-center block'>
                <h2 className='display-text-pixel'>404 Error: Page Not Found <br /> (X_X)</h2>
                <small>This error is caused due to this page not existing (broken links) or due to device / network issues.</small>
                <br />
                <small>Please return to the homepage</small>
                <h6><a href='/art'>Homepage<sup>[↗]</sup></a></h6>
            </div>

            <div className='relative'>
                <div className='plus top-[-10px] right-[-10px]'><Image src='/assets/plus.png' width={40} height={16} alt='' priority /></div>
                <div className='plus top-[-10px] left-[-10px]'><Image src='/assets/plus.png' width={40} height={16} alt='' priority /></div>
            </div>
        </div>
        </div>
        </>
    )
}