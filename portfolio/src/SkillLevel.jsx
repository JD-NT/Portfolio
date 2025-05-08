import './App.css'

function SkillLevel() { return (
<>
<section id='skilllevel' style={{backgroundColor: "#F0F2F2", paddingTop: "24px"}}>
    <div className="container">
        <div className="row">
            <h1 className='col-12 text-center mt-5 my-4'>Expertise</h1>
            <p className='col-12 text-center mb-3'>My main expertise in coding and languages are related to designing and developing a front-end design.</p>

            <div className="col-6 text-start">
                <p className='m-4 ms-0 fw-bold'>HTML:</p>
                <div className="progressbar col-12"> <div style={{width: "80%"}}></div> </div>
            </div>

            <div className="col-6 text-start">
                <p className='m-4 ms-0 fw-bold'>CSS:</p>
                <div className="progressbar col-12"> <div style={{width: "90%"}}></div> </div>
            </div>

            <div className="col-6 text-start">
                <p className='m-4 ms-0 fw-bold'>Bootstrap:</p>
                <div className="progressbar col-12"> <div style={{width: "80%"}}></div> </div>
            </div>

            <div className="col-6 text-start">
                <p className='m-4 ms-0 fw-bold'>TailWind CSS:</p>
                <div className="progressbar col-12"> <div style={{width: "60%"}}></div> </div>
            </div>

            <div className="col-6 text-start">
                <p className='m-4 ms-0 fw-bold'>JavaScript:</p>
                <div className="progressbar col-12"> <div style={{width: "40%"}}></div> </div>
            </div>

            <div className="col-6 text-start">
                <p className='m-4 ms-0 fw-bold'>Java:</p>
                <div className="progressbar col-12"> <div style={{width: "40%"}}></div> </div>
            </div>

            <div className="col-12 text-start">
                <h6 className='mt-5 mb-2 ms-0 fw-bold'>Others:</h6>
            </div>

            <div className="col-6 text-start">
                <p className='m-4 ms-0 fw-bold'>Canva:</p>
                <div className="progressbar col-12"> <div style={{width: "75%"}}></div> </div>
            </div>

            <div className="col-6 text-start">
                <p className='m-4 ms-0 fw-bold'>Adobe Illustrator:</p>
                <div className="progressbar col-12"> <div style={{width: "30%"}}></div> </div>
            </div>

            </div>
        </div>
</section>
</>
    )
}

export default SkillLevel