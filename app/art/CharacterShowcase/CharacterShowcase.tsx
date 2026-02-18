import CharacterCard from '@/app/components/CharacterCard/CharacterCard'
import './CharacterShowcase.css'
import Link from 'next/link'

function CharacterShowcase() { 
    return (
        <>
        <div className='layout-case'>
            <div className='characters'>
                    <Link href='art/Kuno'>
                        <CharacterCard  
                        description='The 1st member of the Six Stars' 
                        member='01' 
                        name='Kuno' 
                        imageSrc='/assets/KunoIcon.webp' 
                        altText={''}/>
                    </Link>
                    <Link href=''>
                        <CharacterCard  
                        description='The 2nd member of the Six Stars' 
                        member='02' 
                        name='Narole' 
                        imageSrc='/assets/BunnyIcon.svg' 
                        altText={''}/>
                    </Link>
                    <Link href=''>
                        <CharacterCard  
                        description='The 3rd member of the Six Stars' 
                        member='03' 
                        name='Akiara' 
                        imageSrc='/assets/AkiaraIcon.webp' 
                        altText={''}/>
                    </Link>
                    <Link href=''>
                        <CharacterCard  
                        description='The 4th member of the Six Stars' 
                        member='04' 
                        name='Vela' 
                        imageSrc='/assets/BunnyIcon.svg'  
                        altText={''}/>
                    </Link>
                    <Link href=''>
                        <CharacterCard  
                        description='The 5th member of the Six Stars' 
                        member='05' 
                        name='Elizu' 
                        imageSrc='/assets/BunnyIcon.svg' 
                        altText={''}/>
                    </Link>
                    <Link href=''>
                        <CharacterCard  
                        description='The newest member of the Six Stars' 
                        member='06' 
                        name='Hitomi' 
                        imageSrc='/assets/BunnyIcon.svg' 
                        altText={''}/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CharacterShowcase