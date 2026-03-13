'use client'

import Image from 'next/image';
import './GalleryImage.css'
import { useState } from 'react';

const defaultDesc = "No alt Text";
interface Image{ imageSrc: string; altText: string; title?: string; } // This what value are the props


const GalleryImage = (props: Image)  => {

    const [isOpen, setIsOpen] = useState(false);
    const openImageModal = () => setIsOpen(true);
    const closeImageModal = () => setIsOpen(false);
    const text = props.altText ?? "Click me";

    return (
        <>
            <div className='galleryimage' 
            onClick={openImageModal}
            >
                <button><Image src={props.imageSrc} draggable='false' width={1000} height={960} quality={80} alt={props.altText}/></button>
                <small><i>{props.title}</i></small>
            </div>

            {/* <button onClick={openImageModal} className='cursor-zoom-in'>
                <div className='image-showcase'>
                    <Image src={props.imageSrc} draggable='false' width={1000} height={960} quality={80} alt={props.altText}/>
                    <small className='title-text2'><i>{props.title}</i></small>
                </div>
            </button> */}

            <div className={`${isOpen ? 'open-modal' : ''} image-modal`}>
                <Image src={props.imageSrc} draggable='false' width={900} height={860} alt='' onClick={closeImageModal} unoptimized/>
                <small><i>{props.title}</i></small>
            </div>
            
            <div className={`${isOpen ? 'overlay cursor-zoom-out' : ''}`} onClick={closeImageModal} aria-hidden='true'></div>
        </>
    )
}

export default GalleryImage