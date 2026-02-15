interface Image{ imageSrc: string; altText?: string; title: string; } // This what value are the props
import './GalleryImage.css'

const GalleryImage = (props: Image) => { 
    return (
        <>
            <div className='galleryimage'>
                <img src={props.imageSrc} />
                <small><i>{props.title}</i></small>
            </div>
        </>
    )
}

export default GalleryImage