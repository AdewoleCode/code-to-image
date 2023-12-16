"use client"

import { backgroundArray } from '@/utils/utilities';
import React from 'react'
import { RiArrowDropDownFill } from 'react-icons/ri';
//  

interface BackgroundSelectorProps {
  background: string;
  setBackground: (background: string) => void;
}

const BackgroundSelector = ({ background, setBackground }: BackgroundSelectorProps) => {
  const [showDropdown, setShowDropdown] = React.useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const handleBackgroundChange = (newBackground: string) => {
    setBackground(newBackground)
    setShowDropdown(false)
  }

  return (
    <div className='bg-selector relative'>
      <p className='py-[5px] text-[18px] font-medium'>ThemeSelector</p>
      <div className='dropdown-title capitalize w-[120px]' onClick={toggleDropdown}>
        <div className='rounded-full w-[20px] h-[20px]' style={{ background: background }}></div>
        <RiArrowDropDownFill style={{ fontSize: "25px", color: "red" }} />
      </div>
      {showDropdown && (
        <div className='dropdown-menu w-[90px] rounded-full flex flex-col gap-2'>
          
          {backgroundArray.map((backg, index) => (
            <div key={index}
              className=' w-[20px] h-[20px] rounded-full cursor-pointer'
              style={{ background: backg }}
              onClick={() => handleBackgroundChange(backg)}
            >
              
            </div>
          ))}
        </div>
      )}
    </div>)
}

export default BackgroundSelector