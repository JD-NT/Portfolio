import './App.css'
import "tailwindcss";
import Kuno from './assets/KunoSit.png'
import { ArrowRight } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';

function Footer() { return (
    <>
    <section id="footer" class="">
    <div class="bg-lavender-150 px-2 gap-5 md:grid grid-flow-col grid-cols-8">
        <div class="col-span-3 emailcontact">
        <div class="md:hidden my-5">
        <h3>Contact</h3>
            <div class="flex">
                <a class="contactlink"><Facebook stroke="#181722" class="mx-2"/></a>
                <a class="contactlink"><Linkedin stroke="#181722" class="mx-2"/></a>
                <a class="contactlink"><Mail stroke="#181722" class="mx-2"/></a>
            </div>
        </div>
        <div class="inline">
            <h3>Get In Touch</h3>
            <input type='text' class="inputemail" placeholder="Your Email"></input>
            <br/>
            <div class="inputtextareacontainer">
                <textarea type="text" class="inputtextarea scrollhidden" placeholder="Your Message"></textarea>
                <a class="inputtextareabutton"><ArrowRight class="h-5"/></a>
            </div>
        </div>
        </div>

        <div class="col-span-6 hidden lg:flex">
            <img src={Kuno} class="footerimg"/>
            <div class="contact">
                <h3>Contact</h3>
                <a class="contactlink"><Facebook stroke="#181722"/><p class="py-1 mx-2">FaceBook</p>
                </a>
                <a class="contactlink"><Linkedin stroke="#181722"/><p class="py-1 mx-2">LinkedIn</p>
                </a>
                <a class="contactlink"><Mail stroke="#181722"/><p class="py-1 mx-2">Gmail</p>
                </a>
            </div>
        </div>

    </div>
    </section>
    </>
    )
}

export default Footer