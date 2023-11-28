import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
  return (
  <>
    <div className="w-full">
      <header className="h-16 bg-gradient-to-r from-cyan-500 to-blue-500 top-0 border-blue-500 border-2 rounded-xl">
        <ul className="flex py-4 justify-evenly text-lg font-serif font-semibold">
          <li><Link href="/">Scooby</Link></li>
          <li><Link href="/">About Evils</Link></li>
          <li className="w-10">
            <Link  className="pt-36 justify-center items-center" href="/">
              <Image src="/Scooby.png" 
               alt='Scooby' 
               width={118}
               height={18}
              //  className='object-contains'
               />
            </Link>
            </li>
          <li><Link href="/">About adventures</Link></li>
          <li><Link href="/">About Team</Link></li>
        </ul>
      </header>
    </div>
  </>
  )
}

export default NavBar
