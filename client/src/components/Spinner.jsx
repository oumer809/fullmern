import React from 'react'

const Spinner = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
        <div className='animate-spin h-32 w-32 rounded-full border-b-2 border-blue-600 border-r-2'></div>
    </div>
  )
}

export default Spinner