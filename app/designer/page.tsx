import './ProductDesign.css'
import Image from 'next/image'

export default function ProductDesign() { 
    return (
        <>
        <div className='layout-case'>
            <div className='group-intro'>
                <h3 className=''>Six Stars</h3>
                <div className='flex'><small>Details:</small> <div className='hazard-background-thin flex-grow-1 self-center max-w-[5em]'></div></div>
            </div>
            
            <div className='character-info'>
                <div className='character-profile'>
                    <div>
                        <div className='aspect-square bounding-box-L flex justify-center halftone-bg'> <Image className='' src='/assets/KunoIcon.png' width={600} height={650} alt='' unoptimized/> </div>
                        <small>Profile</small>
                    </div>
                </div>
                <div className='character-detail'>
                    <div className='detail-box'>
                        <h6>Name:</h6>
                        <p>Kuno</p>
                    </div>                    
                    <div className='detail-box'>
                        <h6>Bio:</h6>
                        <p>Male</p>
                        <p>Human</p>
                    </div>
                    <div className='detail-box'>
                        <h6>Age:</h6>
                        <p>21.</p>
                    </div>
                </div>
            </div>

            <div className='extra-info'>
                <div className='main-accessory'>
                    <h3>Weapons<small>sadsad</small></h3>
                    <div className='accessory'>
                        <h3 className='align-end'></h3>
                        <div className='halftone-bg bounding-box-L'><Image className='' src='/assets/KunoWeapon.png' width={600} height={600} alt='' unoptimized/></div>
                        <small>asdsad</small>
                    </div>
                </div>
                <div className='extra-accessory halftone-bg'>
                    <div className='bounding-box-L'><Image className='' src='/assets/KunoIcon.png' width={400} height={650} alt='' unoptimized/></div>
                    <h3>Extras</h3>
                    <div className='bounding-box-L'><Image className='' src='/assets/KunoIcon.png' width={400} height={650} alt='' unoptimized/></div>
                </div>
            </div>
        </div>
        </>
    )
}