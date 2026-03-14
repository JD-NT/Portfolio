'use client'

import Image from 'next/image';
import './GalleryImage.css'
import { useState } from 'react';

const defaultDesc = "No alt Text";
interface Image{ icon: string; imageSrc: string; altText: string; title?: string; } // This what value are the props


const GalleryImage = (props: Image)  => {

    const [isOpen, setIsOpen] = useState(false);
    const openImageModal = () => setIsOpen(true);
    const closeImageModal = () => setIsOpen(false);
    const text = props.altText ?? "Click me";

    return (
        <>
            <button onClick={openImageModal} className='cursor-zoom-in'>
                <div className='image-showcase'>
                    <Image src={props.icon} draggable='false' width={600} height={960} quality={80} alt={props.altText} unoptimized/>
                    <small className='title-text2'><i>{props.title}</i></small>
                </div>
            </button>

            <div className={`${isOpen ? 'open-modal  no-doc-scroll' : ''} image-modal`}>
                <Image src={props.imageSrc} draggable='false' width={900} height={860} alt='' onClick={closeImageModal} unoptimized/>
                <small><i>{props.title}</i></small>
            </div>
            
            <div className={`${isOpen ? 'overlay cursor-zoom-out' : ''}`} onClick={closeImageModal} aria-hidden='true'></div>
        </>
    )
}

export default GalleryImage