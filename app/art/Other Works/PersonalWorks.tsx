import GalleryImage from '@/app/components/GalleryImage/GalleryImage'
import './Works.css'

function PersonalWorks() { 
    return (
        <>
        <div className='layout-case'>
            <small>Section:</small>
            <h1 className='display-text'>Personal Works</h1>
            <div className='gallery'>
                <div>
                    <small className='image-section'>01</small>
                    <GalleryImage imageSrc='./assets/Biologist OC.webp' title='Biologist'></GalleryImage>
                    <GalleryImage imageSrc='./assets/MilitaryWitch OC.webp' title='Military Witch'></GalleryImage>
                    <GalleryImage imageSrc='./assets/OCowl.webp' title='Owl OC'></GalleryImage>
                </div>
                <div>
                    <small className='image-section'>02</small>
                    <GalleryImage imageSrc='./assets/Foodie OC.webp' title='Foodie Cutie'></GalleryImage>
                    <GalleryImage imageSrc='./assets/ReDavinaK.webp' title='Davina Kelly'></GalleryImage>
                </div>
            </div>
        </div>
        </>
    )
}

export default PersonalWorks