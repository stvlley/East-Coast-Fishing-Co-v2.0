import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav  className="flex items-center justify-between space-around h-16 max-w-screen-xl px-4 mx-auto ">
            <Link className="flex flex-1 w-0 lg:hidden sm:text-center"
                href='/'>East Coast Fishing Co.
            </Link>

            <Link className="flex flex-1 w-0 lg:hidden sm:text-center"
                href='/'>Map
            </Link>
            <Link className="flex flex-1 w-0 lg:hidden sm:text-center"
                href='/'>Profile
            </Link>
            <Link className="flex flex-1 w-0 lg:hidden sm:text-center"
                href='/'>About
            </Link>
            <Link className="flex flex-1 w-0 lg:hidden sm:text-center"
                href='/'>Login
            </Link>
        </nav>
    )
}
