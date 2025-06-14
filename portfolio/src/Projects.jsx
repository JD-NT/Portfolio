import './App.css'
import "tailwindcss";
import sticaclinic from './assets/sticaclinic.png'
import syringe from './assets/syringe.png'
import stica_clinic from './assets/stica_clinic.png'

function Projects() { return (
    <>
    <section id="projects" class="">
    <div class="bg-lavender-100 flex content-center justify-center">
    <div class="p-10 flex flex-wrap flex-row md:grid md:grid-flow-col md:grid-cols-8 gap-5 max-width">
        <a class="col-span-5 p-4" href="https://www.w3schools.com/" target="_blank">
            <fieldset>
            <legend>STICA Clinic, 2023</legend>
            <img src={sticaclinic} class="project-img"/>
            </fieldset>
        </a> 
        <div class="col-span-3">
            <h1 class="numsection">01</h1>
            <h3 class="">Health Management System for the STICA Clinic</h3>
            <p>Case Study / UX / Dashboard</p>
        </div>

    </div>
    </div>
    <div class="bg-lavender-50 flex content-center justify-center">
    <div class="p-10 flex flex-wrap flex-row md:grid md:grid-flow-col md:grid-cols-8 gap-5 max-width">
        <div class="col-span-3">
            <h1 class="numsection">02</h1>
            <h2 class="my-4">STICA Clinic, 2023</h2>
            <h3 class="">Health Management System for the STICA Clinic</h3>
            <p>Case Study / UX / Dashboard</p>
        </div>
        <a class="col-span-5 p-4" href="https://www.w3schools.com/" target="_blank">
            <img src={stica_clinic} class="corner-only project-img"/>
        </a> 
    </div>
    </div>
    </section>
    </>
    )
}

export default Projects