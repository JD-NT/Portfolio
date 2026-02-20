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
                    <GalleryImage imageSrc='/assets/Biologist OC.png' title='Biologist'></GalleryImage>
                    <GalleryImage imageSrc='/assets/MilitaryWitch OC.png' title='Military Witch'></GalleryImage>
                    <GalleryImage imageSrc='/assets/OCowl.png' title='Owl OC'></GalleryImage>
                </div>
                <div>
                    <small className='image-section'>02</small>
                    <GalleryImage imageSrc='/assets/Foodie OC.png' title='Foodie Cutie'></GalleryImage>
                    <GalleryImage imageSrc='/assets/ReDavinaK.png' title='Davina Kelly'></GalleryImage>
                </div>
            </div>
        </div>
        </>
    )
}

export default PersonalWorks