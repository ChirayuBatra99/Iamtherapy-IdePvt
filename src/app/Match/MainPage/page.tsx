"use client";
import React from 'react'
import { useState } from "react";
import Modal from "../Modal/page";
import OptionsStrip from '../Components/OptionsStrip';
import Strip2Options from '../Components/Strip2Options';
import MeetTherapists from '../Components/MeetTherapists';

const MainPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <OptionsStrip />
      <Strip2Options onClose={() => setModalOpen(true)} />
      <MeetTherapists />
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Open Modal
      </button>




      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-semibold">Blurred Background Modal</h2>
        <p className="mt-2 text-gray-600">This is a modal with a blurred backdrop.</p>
      </Modal>
    </div>
  )
}

export default MainPage;



// items-center justify-center