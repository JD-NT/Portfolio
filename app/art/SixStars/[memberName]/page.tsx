import './SixStars.css'
import { notFound } from 'next/navigation';
import Image from 'next/image'
import members from '@/public/members.json'

type Props = {
  params: Promise<{ memberName: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { memberName } = await params;
  const member = members.find((m) => m.memberName === memberName);

  if (!member) return {};

  return {
    title:member.memberName,
  };
}

export default async function MemberDetails({
    params,
}: {
    params: Promise<{memberName: string}>;
}) { 
    const { memberName } = await params;
    const member = members.find((m) => m.memberName === memberName);
    if (!member) return notFound();
    
    return (
            <div className='layout-case'>
            <div className='group-intro'>
                <h3 className=''>Six Stars</h3>
                <div className='flex'><small>{member.id}:</small> <div className='hazard-background-thin flex-grow-1 self-center max-w-[5em]'></div></div>
            </div>
            <div className='character-info'>
                <div className='character-profile'>
                    <div>
                        <div className='aspect-square bounding-box-L flex justify-center halftone-bg'> <Image className='' src={member.profile} width={600} height={650} alt='' unoptimized/> </div>
                        <small>Profile</small>
                    </div>
                </div>
                <div className='character-detail'>
                    <div className='detail-box'>
                        <h6>Name:</h6>
                        <p>{member.name}</p>
                    </div>                    
                    <div className='detail-box'>
                        <h6>Bio:</h6>
                        <p>{member.gender}</p>
                        <p>{member.species}</p>
                    </div>
                    <div className='detail-box'>
                        <h6>Age:</h6>
                        <p>{member.age}</p>
                    </div>
                </div>
            </div>

            <div className='extra-info'>
                <div className='main-accessory'>
                    <h3>Accessories<small>Weapons</small></h3>
                    <div className='accessory'>
                        <h3 className='align-end'></h3>
                        <div className='halftone-bg bounding-box-L'><Image className='' src={member.accessoryMain} width={600} height={600} alt='' unoptimized/></div>
                        <small>asdsad</small>
                    </div>
                </div>
                <div className='extra-accessory grid-bg'>
                    <div className='bounding-box-L bg-[var(--color-white-100)]'><Image className='' src={member.accessoryPrimary} width={420} height={320} alt='' unoptimized/></div>
                    <div className='bounding-box-L bg-[var(--color-white-100)]'><Image className='' src={member.accessorySecondary} width={420} height={320} alt='' unoptimized/></div>
                </div>
            </div>
            
            <div className='extras-section'>
            <div className='flex justify-center text-center'><small>Section:</small></div>
            <h6 className='page-name'>Extras</h6>
                <div className='extras-gallery'>
                    <Image className='' src={member.extras1} width={1000} height={1000} alt='' unoptimized/>
                </div>
            </div>
        </div>
    )
}

