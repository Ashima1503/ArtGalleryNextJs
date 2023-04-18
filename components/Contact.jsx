import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold text-center p-4'>Let's work On a collab together</h1>
        <form className='max-w-[600px] m-auto'>
                <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Name' />
                <input className='border shadow-lg p-3 w-full my-2' type="email" placeholder='Email' />
            <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Topic And Ideas'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default Contact