import GalleryImage from '@/app/components/GalleryImage/GalleryImage'
import './Works.css'
import Image from 'next/image'

function FanWorks() { 
    return (
        <>
        <div className='layout-case'>
            <small>Section:</small>
            <h1 className='display-text-pixel'>Fan Works</h1>
            <div className='gallery'>
                <div>
                    <small className='image-section'>01</small>
                    <GalleryImage icon='/assets/otherWorks/icons/MachineLoveIcon.png' imageSrc='/assets/otherWorks/MachineLoveFinal.png' title='Machine Love' altText='Kasane Teto from the song Machine Love by Jamie Paige'></GalleryImage>
                    <GalleryImage icon='/assets/otherWorks/icons/MishaIcon.png' imageSrc='/assets/otherWorks/Misha.png' title='Misha' altText='Misha from Honkai Star Rail'></GalleryImage>
                </div>
                <div>
                    <small className='image-section'>02</small>
                    <GalleryImage icon='/assets/otherWorks/icons/RazorIcon.png' imageSrc='/assets/otherWorks/Razor.png' title='Razor' altText='Razor from Genshin Impact'></GalleryImage>
                    <GalleryImage icon='/assets/otherWorks/icons/TetoIcon.png' imageSrc='/assets/otherWorks/Teto.png' title='Kasane Teto SynthV' altText='Kasane Teto with the SynthV outfit'></GalleryImage>
                </div>
                <div>
                    <small className='image-section'>03</small>
                    <GalleryImage icon='/assets/otherWorks/Golshi CPM.gif' imageSrc='/assets/otherWorks/Golshi CPM.gif' title='Gold Ship (Minecraft Skin)' altText='A custom Minecraft model of Gold Ship from Umamusume'></GalleryImage>
                    <div className='tablet-hidden'>
                    <GalleryImage icon='/assets/otherWorks/NozomiFP.gif' imageSrc='/assets/otherWorks/NozomiFP.gif' title='Nozomi Tojo: Parlor of Fruits (Minecraft Skin)' altText='A custom Minecraft model of Nozomi Tojo from Love Live!'></GalleryImage>
                    </div>
                </div>
                <div className='tablet-visible'>
                    <small className='image-section'>04</small>
                    <GalleryImage icon='/assets/otherWorks/NozomiFP.gif' imageSrc='/assets/otherWorks/NozomiFP.gif' title='Nozomi Tojo: Parlor of Fruits (Minecraft Skin)' altText='A custom Minecraft model of Nozomi Tojo from Love Live!'></GalleryImage>
                </div>
            </div>
        </div>
        </>
    )
}

export default FanWorks