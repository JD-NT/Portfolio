'use client'

import Image from 'next/image';
import './GalleryImage.css'
import { useState } from 'react';

interface Image{ imageSrc: string; altText?: string; title?: string; } // This what value are the props

const GalleryImage = (props: Image) => { 

    const [isOpen, setIsOpen] = useState(false);
    const openImageModal = () => setIsOpen(true);
    const closeImageModal = () => setIsOpen(false);

    return (
        <>
            <div className='galleryimage' 
            onClick={openImageModal}
            >
                <Image src={props.imageSrc} width={1600} height={960} quality={100} alt='' unoptimized/>
                <small><i>{props.title}</i></small>
            </div>

            <div className={`${isOpen ? 'open-modal' : ''} image-modal`}>
                <Image src={props.imageSrc} width={1600} height={960} quality={100} alt='' onClick={closeImageModal} unoptimized/>
                <small><i>{props.title}</i></small>
            </div>
            
            <div className={`${isOpen ? 'overlay cursor-zoom-out' : ''}`} onClick={closeImageModal} aria-hidden='true'></div>
        </>
    )
}

export default GalleryImage