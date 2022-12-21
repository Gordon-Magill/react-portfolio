import React from 'react'

export default function ContactMe() {

    return (
        <section id='contactMe' className="bg-slate-400 w-screen">
            <p>This is the contact me page</p>
            <form className='flex flex-col sm:w-2/3 md:w-1/2'>
                <input type="text" id="name" placeholder='Your name' className='p-1 m-1 ring ring-slate-600 focus:ring-slate-200 rounded-sm'></input>
                <input type="text" id="email" placeholder='your_email@here.com' className='p-1 m-1'></input>
                <input type="text" id="message" placeholder='Your message for Gordon' className='p-1 m-1'></input>
                <button type='submit' className='rounded-full border-solid border-green-500 bg-green-300 border-4 p-1 m-1'>Submit</button>
            </form>
        </section>
    )
}