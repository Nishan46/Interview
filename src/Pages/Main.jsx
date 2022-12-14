import React, { useState } from 'react'
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner';




function Main() {

  const BASE_URL = 'https://sheet.best/api/sheets/2769e15c-fc05-4d72-abd6-1de8fbc59d03'

  var Id = '';
  const [Name, setName] = useState('');
  const [Class, setClass] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [iseLoad , setIsLoad] = useState(false);
  const [showId , setshowId] = useState(false);
  const [latsId , setlatsId] = useState(0);
  const HandleSubmit = (e) =>{
    setIsLoad(true)
    e.preventDefault()
    axios.get(BASE_URL).then((response) => {

      if(response.data.length === 0)
      {
        const data = {
          ID:'UID0001',
          Name:Name,
          Class:Class,
          'Email Address':Email,
          'Phone Number':Phone,
        }
        setlatsId(Id)
        axios.post(BASE_URL,data).then((response) => {
          setIsLoad(false)
          setshowId(true)
          alert(Id);
        }).catch((error) =>{
          console.error(error)
        })
      }
      else
      {
        setIsLoad(false)
        const lastId = parseInt(response.data[response.data.length - 1].ID.substr(-4,4));
        if(lastId < 9){
          Id = `UID000${(lastId+1).toString()}`
        }
        else if (lastId < 99)
        {
          Id = `UID00${(lastId+1).toString()}`

        }
        else if(lastId < 999)
        {
          Id = `UID0${(lastId+1).toString()}`

        }
        else
        {
          Id = `UID${(lastId+1).toString()}`
        }

        const data = {
          ID:Id,
          Name:Name,
          Class:Class,
          'Email Address':Email,
          'Phone Number':Phone,
        }
        setlatsId(Id)

        axios.post(BASE_URL,data).then((response) => {
          setIsLoad(false)
          setshowId(true)
          alert(Id);
        }).catch((error) =>{
          console.error(error)
        })

        setName("")
        setPhone('')
        setEmail('')
        setClass('')

      }
    })
  }

  return (
    <>
    {showId && (
      <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/50 z-30'>
        <div className='w-[300px] flex items-center justify-center flex-col h-[100px] bg-slate-100'>
          <h1 className='text-2xl font-bold'>ID is : {latsId}</h1>
          <button className='mt-5 font-bold' onClick={() => setshowId(false)}>Close</button>
        </div>
      </div>
    )}
    {iseLoad && (
      <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/50 z-30'>
        <ColorRing
          visible={true}
          height="250"
          width="250"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    )}
       <div className='absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-slate-50'>
      <div className='w-[80%] h-fit py-5 bg-slate-100 shadow-xl flex space-y-5 flex-col items-center justify-center'>
        <form className='w-[95%] flex flex-col space-y-6' onSubmit={HandleSubmit}>

          <span className='w-[95%] flex flex-col justify-center'>
            <label className='text-md font-bold' htmlFor='sname'>Name:</label>
            <input value={Name} onChange={(e) => setName(e.target.value)} required id='sname' className='font-bold focus:shadow-lg focus:border-blue-300 ml-5 rounded-sm shadow-sm outline-none p-2'/>
          </span>

          <span className='w-[95%] flex flex-col justify-center'>
            <label className='text-md font-bold' htmlFor='sclass'>Class:</label>
            <input value={Class} onChange={(e) => setClass(e.target.value)} required id='sclass' className='font-bold focus:shadow-lg focus:border-blue-300 ml-5 rounded-sm shadow-sm outline-none p-2'/>
          </span>

          <span className='w-[95%] flex flex-col justify-center'>
            <label className='text-md font-bold' htmlFor='email'>Email Address:</label>
            <input value={Email} onChange={(e) => setEmail(e.target.value)} required id='email' className='font-bold focus:shadow-lg focus:border-blue-300 ml-5 rounded-sm shadow-sm outline-none p-2'/>
          </span>

          <span className='w-[95%] flex flex-col justify-center'>
            <label className='text-md font-bold' htmlFor='mobile'>Phone Number:</label>
            <input value={Phone} onChange={(e) => setPhone(e.target.value)} type={'tel'} required id='mobile' className='font-bold focus:shadow-lg focus:border-blue-300 ml-5 rounded-sm shadow-sm outline-none p-2'/>
          </span>
          <button className='bg-violet-500 p-4 rounded-sm font-extrabold'>SUBMIT</button>
        </form>
      </div>
    </div>
    </>
   
  )
}

export default Main
