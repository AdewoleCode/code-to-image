"use client"
import CodeEditor from "@/components/CodeEditor";
import { useState } from "react";
import { languages } from "@/utils/utilities";
import LanguageSelector from "@/components/LanguageSelector";

export default function Home() {

  const [language, setLanguage] = useState(languages[0].name)

  return (

    <main className="h-[120vh] flex flex-col items-center justify-between">
      <header className="mt-5 w-[940px] p-4 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919]
      rounded border border-[#3c3c3c] shadow-md">
        <LanguageSelector />
      </header>
      <div className="code-editor-ref mt-[7rem]">
        <CodeEditor language={language} icon="" />
      </div>
    </main>

  )
}
