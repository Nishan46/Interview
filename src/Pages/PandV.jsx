import React, { useState } from 'react'
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner';

function PandV() {

  const BASE_URL = 'https://sheet.best/api/sheets/71a33ad9-009b-405a-95e0-0c2aa02fa077'
  const [ID, setID] = useState('');
  const [iseLoad , setIsLoad] = useState(false);
  const [Go,setGo] = useState(true);
  const [interviwMarks,setInterviwMarks] = useState(0)
  const [PreacticleMarks,setPreacticleMarks] = useState(0)
  const [interviwSpecialNotes,setInterviwSpecialNotes] = useState('')
  const [PreacticleSpecialNotes,setPreacticleSpecialNotes] = useState('')


  const HandleSubmit = (e) =>{
    setIsLoad(true)
    e.preventDefault()

    axios.get(`${BASE_URL}/search?ID=${ID}`).then((Response)=>{
      setIsLoad(false)
      setGo(true)
      console.log(Response.data)
    }).catch((error)=>{
      setIsLoad(false)
      console.error(error)
    })   
  }

  const HandleSubmit2 = (e) => {
    e.preventDefault()
  }

  return (
  <>
    <h1 className='absolute z-40 text-5xl w-[200px] left-[calc(50%-100px)]  font-bold mt-5'>Photography</h1>
    {iseLoad &&  (<div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/50 z-30'>
        <ColorRing
          visible={true}
          height="250"
          width="250"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>)}
    <div className='absolute flex items-center flex-col space-y-20 justify-center top-0 left-0 right-0 bottom-0 bg-slate-50'>
      <div className='w-1/2 h-fit flex shadow-md bg-slate-200'>
        {!Go && (
          <form className='flex w-full' onSubmit={HandleSubmit}>
            <input required onChange={(e)=> setID(e.target.value)} className='p-2 flex-1 outline-none focus:shadow-md rounded-sm w-full m-2'/>
            <button className='m-2 border-violet-700 border p-2'>SEARCH</button>
          </form>
        )}
      </div>
      {Go &&(
        <div className='w-1/2 h-fit flex flex-col'>
          <h1 className='font-bold text-3xl'>Interview Board Section</h1>
          <form onSubmit={HandleSubmit2}>
            <div className=' p-3 rounded-lg flex flex-col space-y-5 font-bold bg-slate-500'>
              <div className='w-full flex items-center'>
                <p className='flex-1'>Marks</p>
                <select onChange={(e)=>setInterviwMarks(e.target.value)} required className='w-[100px] bg-slate-200'>
                  <option>00</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                </select>
              </div>
              <label>Special Notes</label>
              <textarea required onChange={(e)=>setInterviwSpecialNotes(e.target.value)} className='p-2'/>
              <button className='bg-slate-100 p-2 rounded-sm'>SUBMIT</button>
            </div>
          </form>
        </div>
        
      )}
    </div>
    
  </>
  )
}

export default PandV