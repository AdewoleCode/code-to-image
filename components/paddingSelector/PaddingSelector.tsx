"use client"

import React from 'react'

interface PaddingSelectorProps {
  currentPaddings: string
  setCurrentPaddings: (padding: string) => void
  paddings: string[]
}


const PaddingSelector = ({ currentPaddings, setCurrentPaddings, paddings }: PaddingSelectorProps) => {

  const changePadding = (newPadding: string) => {
    setCurrentPaddings(newPadding)
  }
  return (

    <div>
      <p className='py-[8px] text-[17px] font-medium'>PaddingSelector</p>
      <div className='flex gap-2'>
        {
          paddings.map((pad, index) => {
            return (
              <button
                className={`h-[37px] flex items-center justify-center text-[16px] px-[3px] 
                ${currentPaddings === pad && "bg-[#3c3c3c] text-white rounded-md"} 
                hover:text-white hover:cursor-pointer ease-linear transition-all duration-300`}
                onClick={() => changePadding(pad)}
                key={index}>
                {pad}
              </button>
            )
          })}
      </div>
    </div>
  )
}

export default PaddingSelector