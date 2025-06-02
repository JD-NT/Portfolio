import './App.css'
import "tailwindcss";
import Kuno from './assets/KunoSit.png'

function Home() { return (
    <>
    <section id="home" class="">
    <div class="bg-lavender-50 py-5 h-screen flex content-center justify-center grid-bg">
        <div class="max-width content-center justify-center">
            <div class="corner-only-nowrap">
            <h1 class="numsection text-image">Portfolio</h1>
            <div class="flex flex-row content-center justify-center"> 
            </div>
            <div class="flex flex-row content-center justify-center">
            <div class="hazard-background-thin-x"></div> <h5 class="my-1 text-center">Graphic Designer & Front-End Developer</h5> <div class="hazard-background-thin-x"></div> 
            </div>
            <div class="flex justify-between my-3"><div class="barblock1"></div> <div class="barblock1 reverse"></div> </div>
            </div>
        </div>
    </div>
    </section>
    </>
    )
}

export default Home