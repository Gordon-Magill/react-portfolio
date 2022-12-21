import React from 'react'

export default function ContactMe() {

    return (
        <section id='contactMe' className="bg-slate-400 w-screen">
            <p>This is the contact me page</p>
            <form>
                <input type="text" id="name" placeholder='Name' className='p-1 m-1'></input>
                <input type="text" id="email" placeholder='Email' className='p-1 m-1'></input>
                <input type="text" id="message" placeholder='Message' className='p-1 m-1'></input>
                <button type='submit' className='rounded-full border-solid border-green-500 bg-green-300 border-4 p-1 m-1'>Submit</button>
            </form>
        </section>
    )
}