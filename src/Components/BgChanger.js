import React, { useState } from 'react'

const BgChanger = () => {
    const [color,setColor] =useState('black');
  return (
    <div className=' flex h-screen w-full duration-200' style={{backgroundColor:color}}>
      
      <div className='flex flex-wrap items-center justify-center rounded-xl ml-10 w-3/5 h-10 absolute bottom-8 left-72 bg-slate-200'>

        <div className='bg-gray-600 rounded-lg p-2 '>
            <button onClick={()=>{ setColor('gray') }} className='w-10'>Gray</button>
        </div>

 <div className='bg-red-600 rounded-lg p-2 ml-14'>
            <button onClick={()=>{ setColor("red") }} className='w-10'>Red</button>
         
        </div>

        <div className='bg-green-500 rounded-lg p-2 ml-14'>
            <button onClick={()=>{ setColor("green") }} className='w-10'>Green</button>
        </div>

        <div className='bg-blue-600 rounded-lg p-2 ml-14'>
            <button onClick={()=>{ setColor("blue") }} className='w-10'>Blue</button>
        </div>

        <div className='bg-purple-800 rounded-lg p-2 ml-14'>
            <button onClick={()=>{ setColor("purple") }} className='w-10'>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default BgChanger
