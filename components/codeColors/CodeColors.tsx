"use client"

import React from 'react'
import { RiArrowDropDownFill } from 'react-icons/ri';
import { themes } from '@/utils/utilities';

interface codeColorProps {
    color: string;
    setColor: (color: string) => void
}

const CodeColors = ({ color, setColor }: codeColorProps) => {
    const [showDropdown, setShowDropdown] = React.useState(false)

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    const handleColorChange = (newColor: string) => {
        setColor(newColor)
        setShowDropdown(false)
    }

    return (
        <div className='code-Color-div'>
            <p className='py-[5px] text-[18px] font-medium'>ColorSelector</p>
            <div className='dropdown-title capitalize w-[120px]' onClick={toggleDropdown}>
                <h2 className='text-[16px]'>{color}</h2>
                <RiArrowDropDownFill style={{ fontSize: "25px", color: "red" }} />
            </div>
            {showDropdown && (
                <div className='dropdown-menu'>
                    {themes.map((col, index) => (
                        <div key={index}>
                            <button
                                className='dropdown-item w-[100px] text-left text-[16px]'
                                onClick={() => handleColorChange(col)}
                            >
                                {col}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CodeColors