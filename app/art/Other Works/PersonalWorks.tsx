import GalleryImage from '@/app/components/GalleryImage/GalleryImage'
import './Works.css'

function PersonalWorks() { 
    return (
        <>
        <div className='layout-case'>
            <small>Section:</small>
            <h1 className='display-text-pixel'>Personal Works</h1>
            <div className='gallery'>
                <div>
                    <small className='image-section'>01</small>
                    <GalleryImage imageSrc='/assets/otherWorks/Biologist_OC.png' title='Biologist' altText='An OC whom is a biologist that has a carrier companion'></GalleryImage>
                    <GalleryImage imageSrc='/assets/otherWorks/MilitaryWitch_OC.png' title='Military Witch' altText='An OC that is a witch with a militaristic design'></GalleryImage>
                    <GalleryImage imageSrc='/assets/otherWorks/OCowl.png' title='Owl OC' altText='A Kemonomimi that is a great horned owl'></GalleryImage>
                </div>
                <div>
                    <small className='image-section'>02</small>
                    <GalleryImage imageSrc='/assets/otherWorks/Foodie_OC.png' title='Foodie Cutie' altText='A food lover OC that wears food related apparels and clothing'></GalleryImage>
                    <GalleryImage imageSrc='/assets/otherWorks/ReDavinaK.png' title='Davina Kelly' altText='A persona that is named Davina Kelly'></GalleryImage>
                </div>
            </div>
        </div>
        </>
    )
}

export default PersonalWorks