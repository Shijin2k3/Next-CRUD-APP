import React from 'react'

const Create = () => {
  return (
    <div className='flex flex-col items-center py-20'>
        <h1 className='text-3xl'>Create New Post</h1>
        <form className=' w-[40%] flex flex-col space-y-4 mt-6 shadow-lg p-6'>
           <input 
            type='text'
            placeholder='Title'
            className=' p-2 border border-slate-500'
           />
           <textarea 
           placeholder='Content'
           className='border border-slate-500 p-2'/>
           <button className='w-full bg-green-300 py-1.5'>Create Post</button>
        </form>
    </div>
  )
}

export default Create