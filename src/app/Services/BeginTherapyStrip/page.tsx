import React from 'react'

const BeginTherapyStrip = () => {
  return (
    <div className='bg-white py-[6%] '>
        <div className='text-black flex flex-col px-[15%] items-center'>
            <span className='mb-4'> <b>Note:</b> The age range that we deal with is 18-45 years.</span>
            <span className='text-center'> <b>Disclaimer: </b>If you experincing suicidal/emergency condition, or having a history of
                suicidal attempts, or are diagonosed with some metal health condition
                of a severe kind, then our service is not suitable for you. Immediately visit your nearest 
                psychiatrist or health-care hospital.
            </span>
            <a href="/Match">
            <button className='bg-gradient-to-r h-17 w-40 border-8 rounded-xl from-blue-600 to-blue-700 border-blue-600 text-white mt-4'>Start Therapy</button>

            </a>
        </div>
    </div>
  )
}

export default BeginTherapyStrip;
