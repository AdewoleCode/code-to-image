"use client"
import CodeEditor from "@/components/codeEditor/CodeEditor";
import { useState } from "react";
import { themes, languagesArray, backgroundArray } from "@/utils/utilities";
import LanguageSelector from "@/components/languageSelector/LanguageSelector";
import CodeColors from "@/components/codeColors/CodeColors";
import BackgroundSelector from "@/components/backgroundSelector/BackgroundSelector";
import PaddingSelector from "@/components/paddingSelector/PaddingSelector";

export default function Home() {

  const [language, setLanguage] = useState(languagesArray[0].name)
  const [activeIcon, setActiveIcon] = useState(languagesArray[0].icons)
  const [color, setColor] = useState(themes[0])
  const [background, setBackground] = useState(backgroundArray[0])
  const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem"])
  const [currentPaddings, setCurrentPaddings] = useState(paddings[1])

  return (

    <main
      className="h-[120vh] flex flex-col items-center justify-between"
    >
      <header
        className="mt-5 w-[905px] p-3 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919]
        rounded border border-[#3c3c3c] shadow-md flex items-center justify-between text-[17px]"
      >
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          setActiveIcon={setActiveIcon}
        />
        <CodeColors
          color={color}
          setColor={setColor}
        />
        <BackgroundSelector
          background={background}
          setBackground={setBackground}
        />
        <PaddingSelector
          paddings={paddings}
          setCurrentPaddings={setCurrentPaddings}
          currentPaddings={currentPaddings}
        />
        <button>
          Export png
        </button>
      </header>
      <div className="code-editor-ref mt-[7rem]">
        <CodeEditor
          language={language}
          icon={activeIcon}
          codeColor={color}
          backgound={background}
          currentPadding={currentPaddings}
        />
      </div>
    </main>

  )
}
