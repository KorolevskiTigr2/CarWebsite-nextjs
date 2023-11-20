"use client";

import Image from 'next/image';
import CustomButton from "./CustomButton"

const Hero = () => {
    const handleScroll = () => {
        console.log("I pushed the button")
    }



  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Scooby-Doo is coming!
            </h1>

            <p className='hero__subtitle'>
              Scooby-Dooby-Doo, Where Are You?
                We got some work to do now.
                 Scooby-Dooby-Doo, Where Are You?
                  We need some help from you now.
            </p>

            <CustomButton 
                title="Explore Scooby Doo"
                containerStyles="bg-primary-blue
                text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className="hero__image">
                <Image src="/ScoobyDooCar.png"
                  alt="Scooby Doo"
                  fill className='object-contain'
                />

                <div className='hero__image-overlay' />
            </div>
        </div>
    </div>
  )
}

export default Hero