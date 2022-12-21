import React from 'react'
import Hero from './Hero'

export default function AboutMe(){
    return (
        <section className="w-screen" id="aboutMe">
            <Hero/>
            <div className="rounded bg-blue-600 m-2 p-2">
                <p>About me!</p>
            </div>

        </section>
    )
}