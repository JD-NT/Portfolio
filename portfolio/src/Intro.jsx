import './App.css'

function Intro() { return (
    <>
    <section id='intro' className='p-5' style={{backgroundColor: "#F0F2F2", height: "90vh"}}>
        <div className='container row p-5'>
            <h1 className='text-start px-5 mb-5'>My Skills</h1>

            <div className='col-6 px-5 text-start mb-3'>
                <h1>Using creativity to bring flair into my work</h1>
            </div>

            <div className='col-6 px-5 text-start'>
                <h1>Enhancing the visuals of my work</h1>                                                                                       
            </div>

            <div className='col-6 px-5 text-start'>
                <p>Designing a website to improve the user experience of both my clients brand and the users of the website</p>
            </div>  
      
            <div className='col-6 px-5 text-start'> 
                <p>Bringing a simple and concise look to my websites</p>
            </div>

            <div className="col-12 px-5 text-start mt-5">
            <a className='directory' href='#skills'>Check what I can do</a>
            </div>
        </div>
    </section>
    </>
    )}

export default Intro