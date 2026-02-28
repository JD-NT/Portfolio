import GalleryImage from '@/app/components/GalleryImage/GalleryImage'
import './Works.css'

function FanWorks() { 
    return (
        <>
        <div className='layout-case'>
            <small>Section:</small>
            <h1 className='display-text-pixel'>Fan Works</h1>
            <div className='gallery'>
                <div>
                    <small className='image-section'>01</small>
                    <GalleryImage imageSrc='/assets/otherWorks/MachineLoveFinal.png' title='Machine Love'></GalleryImage>
                    <GalleryImage imageSrc='/assets/otherWorks/Misha.png' title='Misha'></GalleryImage>
                    <GalleryImage imageSrc='/assets/otherWorks/GolShi CPM.gif' title='Gold Ship (Minecraft Skin)'></GalleryImage>
                </div>
                <div>
                    <small className='image-section'>02</small>
                    <GalleryImage imageSrc='/assets/otherWorks/Razor.png' title='Razor'></GalleryImage>
                    <GalleryImage imageSrc='/assets/otherWorks/Teto.png' title='Kasane Teto SynthV'></GalleryImage>
                    <GalleryImage imageSrc='/assets/otherWorks/NozomiFP.gif' title='Nozomi Tojo: Parlor of Fruits (Minecraft Skin)'></GalleryImage>
                </div>
            </div>
        </div>
        </>
    )
}

export default FanWorks