import './CharacterCard.css'
import Image from 'next/image';

interface characterName{ name: string; description: string; imageSrc: string; altText?: string; member: string; linkto: string;} // This what value are the props

const CharacterCard = (props: characterName) => { 
    return (
        <>
            <div>
                <div className='character-card'>
                    <div className='bounding-box-L my-[1em]'><Image src={props.imageSrc} width={1000} height={1000} quality={100} alt=''/></div>
                </div>
                <a href={props.linkto}>
                <div className='character-details'><h4>{props.name}<small>[↗]</small></h4><small>{props.description}</small></div>
                </a>
            </div>
        </>
    )
}

export default CharacterCard