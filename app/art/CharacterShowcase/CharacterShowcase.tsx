import CharacterCard from '@/app/components/CharacterCard/CharacterCard'
import './CharacterShowcase.css'

function CharacterShowcase() { 
    return (
        <>
        <div className='layout-case'>
            <div className='characters'>
                    <a>
                        <CharacterCard  description='The 1st member of the Six Stars' member='01' name='Kuno' imageSrc='./assets/KunoIcon.png' altText={''}/>
                    </a>

                    <a>
                        <CharacterCard  description='The 2nd member of the Six Stars' member='02' name='Narole' imageSrc='./assets/BunnyIcon.svg' altText={''}/>
                    </a>

                    <a>
                        <CharacterCard  description='The 3rd member of the Six Stars' member='03' name='Akiara' imageSrc='./assets/AkiaraIcon.png' altText={''}/>
                    </a>

                    <a>
                        <CharacterCard  description='The 4th member of the Six Stars' member='04' name='Vela' imageSrc='./assets/BunnyIcon.svg'  altText={''}/>
                    </a>
                    <a>
                        <CharacterCard  description='The 5th member of the Six Stars' member='05' name='Elizu' imageSrc='./assets/BunnyIcon.svg' altText={''}/>
                    </a>
                    <a>
                        <CharacterCard  description='The newest member of the Six Stars' member='06' name='Hitomi' imageSrc='./assets/BunnyIcon.svg' altText={''}/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default CharacterShowcase