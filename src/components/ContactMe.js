import React from 'react'

export default function ContactMe() {
    const inputFormatting='p-1 m-1 ring ring-slate-600 hover:ring-slate-200 rounded-sm'

    return (
        <section id='contactMe' className="bg-slate-400 w-screen flex flex-col items-center">
            {/* <p>This is the contact me page</p> */}
            <form className='flex flex-col w-2/3 md:w-1/2'>
                <input type="text" id="name" placeholder='Your name' className={inputFormatting}></input>
                <input type="text" id="email" placeholder='your_email@here.com' className={inputFormatting}></input>
                <input type="text" id="message" placeholder='Your message for Gordon' className={inputFormatting}></input>
                <button type='submit' className='rounded-full border-solid border-green-600 bg-green-300 hover:bg-green-400 focus:bg-green-500 border-4 p-1 m-1'>Submit</button>
            </form>
        </section>
    )
}