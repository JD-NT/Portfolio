import './CharacterCard.css'
export const ImageCard: React.FC<characterName> = ({ imageSrc, altText }) => {
  return <img src={imageSrc} alt={altText} style={{ maxWidth: '100%' }} />; // The src is the imageSrc which can be a directory for the file
};

interface characterName{ name: string; description: string; imageSrc: string; altText: string; member: string;} // This what value are the props

const CharacterCard = (props: characterName) => { 
    return (
        <>
            <div>
                <div className='character-card'>
                    <div className='bounding-box-L my-[1em]'><img src={props.imageSrc}/></div>
                </div>
                <div className='character-details'><h4>{props.name}<small>[↗]</small></h4><small>{props.description}</small></div>
            </div>
        </>
    )
}

export default CharacterCard