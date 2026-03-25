import GalleryImage from '@/app/components/GalleryImage/GalleryImage'
import './Works.css'

function PersonalWorks() { 
    return (
        <>
        <div className='layout-case'>
            <small>Section:</small>
            <h1 className='display-text-pixel'>//Personal Works</h1>
            <div className='gallery'>
                <div>
                    <small className='image-section'>01</small>
                    <GalleryImage icon='/assets/otherWorks/icons/BiologistOCIcon.png' imageSrc='/assets/otherWorks/Biologist_OC.png' title='Biologist' altText='An OC whom is a biologist that has a carrier companion'></GalleryImage>
                    <GalleryImage icon='/assets/otherWorks/icons/OwlOCIcon.png' imageSrc='/assets/otherWorks/OCowl.png' title='Owl OC' altText='A Kemonomimi that is a great horned owl'></GalleryImage>
                </div>
                <div>
                    <small className='image-section'>02</small>
                    <GalleryImage icon='/assets/otherWorks/icons/MilitaryWitchIcon.png' imageSrc='/assets/otherWorks/MilitaryWitch_OC.png' title='Military Witch' altText='An OC that is a witch with a militaristic design'></GalleryImage>
                    <GalleryImage icon='/assets/otherWorks/icons/BunOCIcon.png' imageSrc='/assets/otherWorks/Bun OC.png' title='Bun OC' altText='An OC with a giant spear as a weapon'></GalleryImage>
                </div>
                <div>
                    <small className='image-section'>03</small>
                    <GalleryImage icon='/assets/otherWorks/icons/FoodieCutieIcon.png' imageSrc='/assets/otherWorks/Foodie_OC.png' title='Foodie Cutie' altText='A food lover OC that wears food related apparels and clothing'></GalleryImage>
                    <div className='tablet-hidden'>
                    <GalleryImage icon='/assets/otherWorks/icons/BunnyKnifeIcon.png' imageSrc='/assets/otherWorks/BunnyKnife.png' title='Bunny Knife' altText='A bunny Kemonomimi that is an assassin'></GalleryImage>
                    </div>
                </div>
                <div className='tablet-visible'>
                    <small className='image-section'>04</small>
                    <GalleryImage icon='/assets/otherWorks/icons/BunnyKnifeIcon.png' imageSrc='/assets/otherWorks/BunnyKnife.png' title='Foodie Cutie' altText='A bunny Kemonomimi that is an assassin'></GalleryImage>
                </div>
            </div>
        </div>
        </>
    )
}

export default PersonalWorks