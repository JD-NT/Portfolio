import login from './assets/login.png'
import dashboard from './assets/dashboard.png'
import table from './assets/table.png'
import clinic from './assets/stica_clinic.png'
import details from './assets/patient_detail.png'
import records from './assets/patient_record.png'
import './App.css'

function Projects() { return (
    <>
    <section id='projects' style={{padding: "5%"}}>
    <div className="container">
        <h1 classNameName='text-center m-5'>Projects</h1>
        <h1 classNameName='text-center m-5'>STI College Alabang: Clinic Assist</h1>

        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div className='carousel-inner'>
            <div className='carousel-item active'>
                <img src={clinic} className='overflow-hidden w-75 rounded-img'/>
            </div>
            <div className='carousel-item'>
                <img src={login} className='overflow-hidden w-75 rounded-img'/>
            </div>
            <div className='carousel-item'>
                <img src={dashboard} className='overflow-hidden w-75 rounded-img'/>
            </div>
            <div className='carousel-item'>
                <img src={table} className='overflow-hidden w-75 rounded-img'/>
            </div>
            <div className='carousel-item'>
                <img src={details} className='overflow-hidden w-75 rounded-img'/>
            </div>
            <div className='carousel-item'>
                <img src={records} className='overflow-hidden w-75 rounded-img'/>
            </div>
        </div>
    </div>
    </div>

    </section>
    </>
    )}

export default Projects