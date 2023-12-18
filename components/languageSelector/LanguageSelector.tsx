"use client"
import { languagesArray } from '@/utils/utilities';
import { log } from 'console';
import React, { useState } from 'react'
import { RiArrowDropDownFill } from 'react-icons/ri';

interface LanguageSelectorProps {
    language: string;
    setLanguage: (language: string) => void;
    setActiveIcon: (icons: string) => void;
}

const LanguageSelector = ({ language, setLanguage, setActiveIcon }: LanguageSelectorProps) => {
    const [showDropdown, setShowDropdown] = React.useState(false)

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    const handleLanguageChange = (newLanguage: string) => {
        setLanguage(newLanguage)
        const newActiveIcon = languagesArray.find(lang => lang.name === newLanguage)?.icon

        console.log(newActiveIcon)

        if (newActiveIcon) {
            setActiveIcon(newActiveIcon)
        }
        setShowDropdown(false)
    }

    return (
        <>
            <div >
                <p className='py-[5px] text-[18px] font-medium'>Language</p>
                <div className='dropdown-title capitalize w-[120px]' onClick={toggleDropdown}>
                    <h2 className='text-[16px]'>{language}</h2>
                    <RiArrowDropDownFill style={{ fontSize: "25px", color: "red" }} />
                </div>
                {showDropdown && (
                    <div className='dropdown-menu'>
                        {languagesArray.map((lang, index) => (
                            <div key={index}>
                                <button
                                    className='dropdown-item w-[100px] text-left text-[16px]'
                                    onClick={() => handleLanguageChange(lang.name)}
                                >
                                    {lang.name}
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default LanguageSelector