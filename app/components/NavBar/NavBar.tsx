'use client'

import { useState } from 'react';
import './NavBar.css'
import Link from 'next/link';

export default function NavBar() {     
    const [isOpen, setIsOpen] = useState(false); // Default state is that the sidebar is closed (This code is explained for myself cause I am learning it rn ;w;)
    const openSidebar = () => setIsOpen(true);
    const closeSidebar = () => setIsOpen(false);

    return (
    <>
    <div className='w-full'>
    </div>
    <header className={`${isOpen ? 'show' : ''}`} /* isOpen is the state that the header is cuurently in and if setIsOpen is true it adds the 'show' class, otherwise it's blank*/ > 
    <a href='/' className='logo'>Dale ₍ᐢ. .ᐢ₎</a>
    <nav>
        <ul className='nav_links' onClick={closeSidebar}>
            <button className='close-button'onClick={closeSidebar} aria-label='Close Sidebar'><big>[x]</big></button>
            <li> <Link href='/'>Art<sup>[↗]</sup></Link></li>
            <li> <Link href='/about'>About<sup>[↗]</sup></Link></li>
            <li> <Link href='#footer'>Contact<sup>[↗]</sup></Link></li>
        </ul>
    </nav>
    <a className='cta'>Resume</a>
    </header>
    <div className='overlay' onClick={closeSidebar} aria-hidden='true'></div>
    <button className='hamburger-button' onClick={openSidebar} aria-label='Open Sidebar' aria-expanded={isOpen ? 'true' : 'false'} aria-controls='navbar'><big>[+]</big></button>
    </>
    )}