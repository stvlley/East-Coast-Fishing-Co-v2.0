import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import mapSVG from '/Users/stvlley/east-coast-fishing-co-v2.0/public/mapSVG.svg'

export default function Navbar() {
    return (
        <nav  className="flex items-center justify-between space-around h-16 max-w-screen-xl px-4 mx-auto ">
            <Link className="flex flex-1 w-0 lg:hidden sm:text-center"
                href='/'>East Coast Fishing Co.
            </Link>

            <ul className='space-x-8 text-sm font-medium justify-center'>
            <Link href='/map'>
                    Home
            </Link>
            <Link 
                href='/'>Profile
            </Link>
            <Link 
                href='/about'>About
            </Link>
            <Link 
                href='/'>Login
            </Link>
            </ul>
        </nav>
    )
}
