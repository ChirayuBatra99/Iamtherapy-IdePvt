import React from 'react'

const BeginTherapyStrip = () => {
  return (
    <div className='bg-blue-100'>
        <div className='text-black flex flex-col px-[15%] items-center'>
            <span>Note: The age range that we deal with is 18-45 years</span>
            <span>Disclaimer: If you experincing suicidal/emergency condition, or having a history of
                suicidal attempts, or are diagonosed with some metal health condition
                of a severe kind, then our service is not suitable for you. Immediately visit your nearest 
                psychiatrist or health-care hospital.
            </span>
            <button className='bg-blue-700 h-17 w-28 rounded-2xl text-white'>Book Therapy</button>
        </div>
    </div>
  )
}

export default BeginTherapyStrip;
