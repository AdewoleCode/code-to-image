"use client"
import React, { useEffect, useState } from 'react'
import { Resizable } from "re-resizable"
import AceEditor from "react-ace"

import "ace-builds/src-noconflict/theme-chaos"
import "ace-builds/src-noconflict/theme-github_dark"
import "ace-builds/src-noconflict/theme-twilight"
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/theme-terminal"
import "ace-builds/src-noconflict/theme-ambiance"

import "ace-builds/src-noconflict/mode-typescript"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/mode-css"
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/mode-python"

import { initialCodeValue } from "../../utils/utilities"

interface CodeEditorProps {
  language: string;
  backgound: string;
  icon: string;
  codeColor?: string;
  currentPadding?: string
}

const CodeEditor = ({ language, icon, backgound, codeColor, currentPadding }: CodeEditorProps) => {

  const [width, setWidth] = React.useState(900)
  const [height, setHeight] = React.useState<number | null>(500)
  const [title, setTitle] = React.useState("untitled-1")
  const [codeValue, setCodeValue] = React.useState(initialCodeValue)

  const handleCodeChange = (newCodeValue: string) => {
    setCodeValue(newCodeValue)

  }

  // @ts-ignore
  const handleResize = (event, direction, ref, posititon) => {
    const updatedHeight = ref.style.height
    setHeight(parseInt(updatedHeight, 10))
  }

  const updateSize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <Resizable
      minHeight={550}
      minWidth={510}
      maxWidth={900}
      defaultSize={{ width: width, height: height || 500 }}
      onResize={handleResize}
      className='resize-container relative'
      style={{ background: backgound }}
    >
      <div className='ace-wrapper' style={{ padding: currentPadding }}>
        <div className="ace-header h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-80">
          <div className="dots flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbc6a]"></div>
            <div className="w-3 h-3 rounded-full bg-[#67f772]"></div>
          </div>

          <div className='input-control w-full'>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className='w-full text-[hsla(0, 0%, 100%, .6)] outline-none font-medium text-center bg-transparent' />
          </div>

          <div className="icon flex justify-center item-center p-1 bg-black bg-opacity-40 rounded-sm">
            <img src={icon} className='w-[35px]' alt="language" />
          </div>

        </div>
        <AceEditor value={codeValue}
          theme={codeColor}
          mode={language.toLocaleLowerCase()}
          name="UNIQUE_ID_OF_DIV"
          fontSize={16}
          wrapEnabled={true}
          showPrintMargin={false}
          height={`calc(${height}px - ${currentPadding} - ${currentPadding})`}
          // the 52px is the value of the ace header and we are subracting it.
          highlightActiveLine={false}
          showGutter={false}
          className="ace-editor-container"
          editorProps={{ $blockScrolling: true }}
          onChange={handleCodeChange}
        />
      </div>
    </Resizable>
  )
}

export default CodeEditor