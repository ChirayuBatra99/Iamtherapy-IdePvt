import React from 'react';

interface ModalProps {
    onClose: () => void;
}

const Strip2Options = ({onClose}: ModalProps) => {
    return (
        <div className='flex flex-row w-screen pt-6 pb-10 bg-rose-50'>
            <div className='border-1 border-amber-900 w-[42%] h-30 mr-[2%] ml-[6%] rounded-xl pl-4 bg-gradient-to-r from-rose-200 to-rose-100'>
                <h1 className='font-extrabold pt-1'>Find the right therpaist for you</h1>
                <h1 className='font-sans py-3'>Find the one you matches your needs</h1>
                <h1 onClick={onClose} className='underline text-orange-600'>Match with a therapist→</h1>
            </div>

            <div className='border-1 border-amber-900 w-[42%] h-30 ml-[2%] rounded-xl pl-4 bg-gradient-to-r from-rose-200 to-rose-100'>
                <h1 className='font-extrabold pt-1'>Explore more about therapy</h1>
                <h1 className='font-sans py-3'>Read out more on how therapy can help you</h1>
                <h1 className='underline text-orange-600'>Explore→</h1>
            </div>
        </div>
    )
}

export default Strip2Options;
