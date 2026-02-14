import './SixStars.css'

interface characterDetail{ 
    name: string; 
    description: string; 
    gender: string;
    pronouns: string;
    profile: string;
    charactersheet: string;
    weapon1: string;
    weapon2: string;
} // This what value are the props

const SixStars = (member: characterDetail) => { 
    return (
        <>
            <div className='layout-case'>
                <div>
                    <h1>{member.name}</h1>
                    <p>{member.description}</p>
                    <p>Gender: {member.gender}</p>
                    <p>{member.pronouns}</p>
                    <img src={member.profile} />
                    <img src={member.charactersheet} />
                    <img src={member.weapon1} />
                    <img src={member.weapon2} />
                </div>
            </div>
        </>
    )
}

export default SixStars