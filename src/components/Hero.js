import React from 'react'
import logo from '../logo.svg'

export default function Hero(){
    return (
        <section className="w-screen flex place-content-center">
            <img src={logo} alt='Hero' className='w-1/2'></img>
        </section>
    )
}