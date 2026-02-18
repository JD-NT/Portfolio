import GalleryImage from '@/app/components/GalleryImage/GalleryImage'
import './Works.css'

function FanWorks() { 
    return (
        <>
        <div className='layout-case'>
            <small>Section:</small>
            <h1 className='display-text'>Fan Works</h1>
            <div className='gallery'>
                <div>
                    <small className='image-section'>01</small>
                    <GalleryImage imageSrc='/assets/MachineLoveFinal.webp' title='Machine Love'></GalleryImage>
                    <GalleryImage imageSrc='/assets/Misha.webp' title='Misha'></GalleryImage>
                    <GalleryImage imageSrc='/assets/GolShi CPM.gif' title='Gold Ship (Minecraft Skin)'></GalleryImage>
                </div>
                <div>
                    <small className='image-section'>02</small>
                    <GalleryImage imageSrc='/assets/Sprite-000142.webp' title='Razor'></GalleryImage>
                    <GalleryImage imageSrc='/assets/Teto.webp' title='Kasane Teto SynthV'></GalleryImage>
                    <GalleryImage imageSrc='/assets/NozomiFP.gif' title='Nozomi Tojo: Parlor of Fruits (Minecraft Skin)'></GalleryImage>
                </div>
            </div>
        </div>
        </>
    )
}

export default FanWorks