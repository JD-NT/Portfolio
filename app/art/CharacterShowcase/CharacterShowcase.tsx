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
                    <div className='flex gap-[0.5em]'><Image src='/assets/Revolvis.png' width={40} height={16} alt='' priority /><small>Section: <br />Characters</small></div>
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
                        imageSrc='/assets/KunoIcon.png' 
                        altText={''}
                        linkto='/art/Kuno'/>

                        <CharacterCard  
                        description='The 2nd member of the Six Stars' 
                        member='02' 
                        name='Narole' 
                        imageSrc='/assets/NaroleIcon.png' 
                        altText={''}
                        linkto='/art/Narole'/>

                        <CharacterCard  
                        description='The 3rd member of the Six Stars' 
                        member='03' 
                        name='Elizu'
                        imageSrc='/assets/ElizuIcon.png'  
                        altText={''}
                        linkto='/art/Elizu'/>

                        <CharacterCard  
                        description='The 4th member of the Six Stars' 
                        member='04' 
                        name='Vela' 
                        imageSrc='/assets/VelaIcon.png'  
                        altText={''}
                        linkto='/art/Vela'/>
 
                        <CharacterCard  
                        description='The 5th member of the Six Stars' 
                        member='05' 
                        name='Akiara'
                        imageSrc='/assets/AkiaraIcon.png'
                        altText={''}
                        linkto='/art/Akiara'/>

                        <CharacterCard  
                        description='The newest member of the Six Stars' 
                        member='06' 
                        name='Sybila' 
                        imageSrc='/assets/SybilaIcon.png' 
                        altText={''}
                        linkto='/art/Sybila'/>

                </div>
            </div>
        </>
    )
}

export default CharacterShowcase