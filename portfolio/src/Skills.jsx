import computer from './assets/computer.png'
import illustrate from './assets/illustrate.png'
import uiux from './assets/uiux.png'
import './App.css'

function Skills() { return (
<>
<section id='skills' style={{paddingTop:"24px"}}>
<h1 style={{textAlign:"center", marginTop: "48px"}}>What I can do</h1>
<div className='container flex'>

    <div className='textbox2'>
    <img src={uiux} />
        <h1>UI/UX Designer</h1>
        <p>Giving function to my design while making the user interface easy to navigate and understand.</p>
    </div>
  
    <div className='textbox'>
    <img src={computer} />
        <h1>Web Programmer</h1>
        <p>I have a good understanding of web programming and how it works, I can utilize all its components. I can use both HTML and CSS to its full extent while making the code concise and efficient.</p>
    </div>

    <div className='textbox2'>
    <img src={illustrate} />
        <h1>Illustrator</h1>
        <p>Enhancing the visuals of my work to give it more flair and more recognizable</p>
    </div>
    
</div>
    <div className="container">
        <a className='directory text-center' href='#skilllevel'>Check what programming languages and other tools I use</a>
    </div>
</section>
</>
    )
}

export default Skills