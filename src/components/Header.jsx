'use client'
import React, {useState, useEffect} from "react"
import Image from "next/image"
import Link from "next/link"
import {Link as ScrollLink} from 'react-scroll'
import Nav from "./Nav"
import NavMobile from "./NavMobile"
import { Button } from "./ui/button"

const Header = () => {
    const [active, setActive] = useState(false);

    useEffect(()=> {
        // detect scroll
        const handleScroll = () => {
            setActive(window.scrollY > 100)
        }

        // add event listener
        window.addEventListener('scroll', handleScroll);

        // Clear event listener
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])


  return (
    <header className={`${
    active ? 'bg-black py-4' : 'bg-none py-8'} 
    fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
            {/* logo, nav, btn  */}
            <Link href='/'>
                <Image src='/logo.svg' width={75} height={30} alt=""/>
            </Link>

            {/* nav  */}
            <Nav containerStyle='hidden xl:flex gap-x-12 text-white' linkStyle='capitalize'/>
            {/* btn  */}
            <ScrollLink to='reservation' smooth={true}>
                <Button variant='orange' size='sm'>Book a table</Button>
            </ScrollLink>

            <NavMobile containerStyle='xl:hidden '
            iconStyle='text-3xl'
            linkStyle='uppercase'
            />
        </div>
      </div>
    </header>
  )
}

export default Header
