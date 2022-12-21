import React from 'react'
import Hero from './Hero'
import logo from '../logo.svg'

export default function AboutMe(){
    return (
        <section className="w-screen" id="aboutMe">
            <Hero/>
            <div className="rounded bg-blue-600 m-2 p-2">
                <img src={logo} className="max-w-sm" alt="profile"></img>
                <p>Bio content</p>
            </div>

        </section>
    )
}