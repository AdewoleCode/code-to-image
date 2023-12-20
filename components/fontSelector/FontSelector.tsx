"use client"

import { FontSizesArray } from '@/utils/utilities'
import React from 'react'
import { RiArrowDropDownFill } from 'react-icons/ri'

interface FontSelectorProps {
    setCurrentFont: (font: string) => void
    currentFontDesc: string,
    setCurrentFontDesc: (fontDesc: string) => void
}


const fontSelector = ({ setCurrentFont, currentFontDesc, setCurrentFontDesc }: FontSelectorProps) => {
    const [showDropdown, setShowDropdown] = React.useState(false)

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    const handleFontChange = (newFont: string, newFontDesc: string) => {
        setCurrentFont(newFont)
        setCurrentFontDesc(newFontDesc)
        setShowDropdown(false)
    }

    return (

        <div className='font-selector-div'>
            <p className='py-[8px] text-[17px] font-medium'>FontSelector</p>
            <div className='dropdown-title capitalize w-[120px]' onClick={toggleDropdown}>
                <h2 className='text-[16px]'>{currentFontDesc}</h2>
                <RiArrowDropDownFill style={{ fontSize: "25px", color: "red" }} />
            </div>
            {showDropdown && (
                <div className='dropdown-menu'>
                    {FontSizesArray.map((font, index) => (
                        <div key={index}>
                            <button
                                className='dropdown-item w-[100px] text-left text-[16px]'
                                onClick={() => handleFontChange(font.fontSize, font.fontDesc)}
                            >
                                {font.fontDesc}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default fontSelector