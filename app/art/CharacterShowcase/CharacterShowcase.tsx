import CharacterCard from '@/app/components/CharacterCard/CharacterCard'
import './CharacterShowcase.css'
import Link from 'next/link'
import Image from 'next/image'

function CharacterShowcase() { 
    return (
        <>
        <div className='layout-case'>
            {/* <div className='w-100% text-center'><small>Section:</small></div>
            <div className='page-name'><h6>Characters</h6></div> */}
            
            <div className='mobile-hidden'>
                <div className='flex justify-between'>
                    <div className='flex gap-[0.5em]'><Image src='/assets/revolvis.png' width={40} height={16} alt='' priority /><small>Section: <br />Characters</small></div>
                    <div className='flex'><small>Revolvis: <br /> Six Stars</small></div>
                    <div className='flex'><small>My Own <br /> Characters</small></div>
                    <small>©Dale</small>
                </div>
            </div>

            <div className='characters halftone-bg'>
                        <CharacterCard  
                        description='The 1st member of the Six Stars' 
                        member='01' 
                        name='Kuno' 
                        imageSrc='/assets/pfp/KunoIcon.png' 
                        altText='A front view profile of Kuno'
                        linkto='/art/SixStars/Kuno'/>

                        <CharacterCard  
                        description='The 2nd member of the Six Stars' 
                        member='02' 
                        name='Narole' 
                        imageSrc='/assets/pfp/NaroleIcon.png' 
                        altText='A front view profile of Narole'
                        linkto='/art/SixStars/Narole'/>

                        <CharacterCard  
                        description='The 3rd member of the Six Stars' 
                        member='03' 
                        name='Elizu'
                        imageSrc='/assets/pfp/ElizuIcon.png'  
                        altText='A front view profile of Elizu'
                        linkto='/art/SixStars/Elizu'/>

                        <CharacterCard  
                        description='The 4th member of the Six Stars' 
                        member='05' 
                        name='Akiara'
                        imageSrc='/assets/pfp/AkiaraIcon.png'
                        altText='A front view profile of Akiara'
                        linkto='/art/SixStars/Akiara'/>

                        <CharacterCard  
                        description='The 5th member of the Six Stars' 
                        member='04' 
                        name='Vela' 
                        imageSrc='/assets/pfp/VelaIcon.png'  
                        altText='A front view profile of Vela'
                        linkto='/art/SixStars/Vela'/>
 
                        <CharacterCard  
                        description='The newest member of the Six Stars' 
                        member='06' 
                        name='Sybila' 
                        imageSrc='/assets/pfp/SybilaIcon.png' 
                        altText='A front view profile of Sybila'
                        linkto='/art/SixStars/Sybila'/>

                </div>
            </div>
        </>
    )
}

export default CharacterShowcase