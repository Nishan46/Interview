import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Main from './Pages/Main'


function App() {
  return (
    <div className='absolute left-0 top-0 right-0 bottom-0 flex items-center justify-around bg-slate-900'>
      <section className='text-center bg-slate-100 w-[200px] h-[150px] rounded-lg flex items-center justify-center'>
        <p className='font-bold text-2xl'><a href='/main' className='cursor-pointer'>MAIN BOARD</a></p>
      </section>
      <section className='bg-slate-100 w-[200px] h-[150px] rounded-lg flex items-center justify-center text-center'>
        <p className='font-bold text-2xl'><a href='/photography&videography' className='cursor-pointer'>PHOTOGRAPHY & VIDEOGRAPHY</a> </p>
      </section>
      <section className='text-center bg-slate-100 w-[200px] h-[150px] rounded-lg flex items-center justify-center'>
        <p className='font-bold text-2xl'><a href='/technical' className='cursor-pointer'>TECHNICAl</a></p>
      </section>
      <section className='text-center bg-slate-100 w-[200px] h-[150px] rounded-lg flex items-center justify-center'>
        <p className='font-bold text-2xl'><a href='/announcing&reporting'  className='cursor-pointer'>ANNOUNCING & REPORTING</a></p>
      </section>
    </div>
  )
}
 
export default App
