"use client"
import CodeEditor from "@/components/codeEditor/CodeEditor";
import { useRef, useState } from "react";
import { themes, languagesArray, backgroundArray, FontSizesArray } from "@/utils/utilities";
import LanguageSelector from "@/components/languageSelector/LanguageSelector";
import CodeColors from "@/components/codeColors/CodeColors";
import BackgroundSelector from "@/components/backgroundSelector/BackgroundSelector";
import PaddingSelector from "@/components/paddingSelector/PaddingSelector";
import html2canvas from "html2canvas";
import FontSelector from "@/components/fontSelector/FontSelector";

export default function Home() {

  const EditorRef = useRef(null)

  const [language, setLanguage] = useState(languagesArray[0].name)
  const [activeIcon, setActiveIcon] = useState(languagesArray[0].icon)
  const [color, setColor] = useState(themes[0])
  const [background, setBackground] = useState(backgroundArray[0])
  const [paddings, setPaddings] = useState(["20px", "30px", "40px"])
  const [currentPaddings, setCurrentPaddings] = useState(paddings[1])
  const [currentFont, setCurrentFont] = useState(FontSizesArray[1].fontSize)
  const [currentFontDesc, setCurrentFontDesc] = useState(FontSizesArray[0].fontDesc)


  const handleImageDownload = async () => {
    const editorElement = EditorRef.current;

    if (editorElement) {
      const canvas = await html2canvas(editorElement)
      const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")

      const link = document.createElement("a")
      link.download = "code.png"
      link.href = image
      link.click()
    }

  }

  return (
    <main
      className="min-h-[120vh] flex flex-col items-center justify-between"
    >
      <header
        className="mt-3 w-[970px] p-3 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919]
        rounded border border-[#3c3c3c] shadow-md flex items-center justify-between gap-[30px] text-[17px]"
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
        <FontSelector
          setCurrentFont={setCurrentFont}
          currentFontDesc= {currentFontDesc}
          setCurrentFontDesc = {setCurrentFontDesc}
        />
        <PaddingSelector
          paddings={paddings}
          setCurrentPaddings={setCurrentPaddings}
          currentPaddings={currentPaddings}
        />
        <button style={{
          marginLeft: "auto",
          justifySelf: "center",
          alignSelf: "center",
          color: "red",
          padding: "0.6rem 0.9rem 0.6rem 0.9rem",
          background: "#fff",
          borderRadius: "5px",
          fontSize: "0.7rem",
          fontWeight: "800"
        }}
          onClick={handleImageDownload}>
          Download png
        </button>
      </header>
      <div className="code-editor-ref mt-[8rem]" ref={EditorRef}>
        <CodeEditor
          language={language}
          icon={activeIcon}
          codeColor={color}
          backgound={background}
          currentPadding={currentPaddings}
          currentFont={currentFont}
        />
      </div>
    </main>

  )
}
