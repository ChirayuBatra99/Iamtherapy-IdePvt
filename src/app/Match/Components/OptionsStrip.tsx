import React from 'react'

const OptionsStrip = () => {
  return (
    <div className='w-screen bg-amber-300 h-64 flex flex-col items-center'>
      <h3 className='my-13 font-stretch-110% font-extrabold text-3xl'>Find the expert that suits your needs to best.</h3>
      <div className='flex flex-row'>
        <div className='bg-amber-500 w-34 h-14 mx-11 rounded-4xl flex flex-col items-center justify-center'>
          <h3>Therapist</h3>
        </div>
        <div className='bg-amber-500 w-34 h-14 mx-11 rounded-4xl flex flex-col items-center justify-center'>
          <h3>Psychiatrist</h3>
        </div>
        <div className='bg-amber-500 w-34 h-14 mx-11 rounded-4xl flex flex-col items-center justify-center'>
          <h3>Couple's therapy</h3>
        </div>
      </div>
    </div>
  )
}

export default OptionsStrip;
