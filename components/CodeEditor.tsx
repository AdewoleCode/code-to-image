"use client"
import React from 'react'
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

interface CodeEditorProps {
  onCodeChange: (code: string) => void;
  language: string;
  theme: string;
  icon: string;
  background?: string;
  currentPadding?: string
}


const CodeEditor = ({ onCodeChange, language, icon, theme, background, currentPadding }: CodeEditorProps) => {
  return (
    <Resizable minHeight={466} minWidth={510} maxWidth={1000}>
      <div>
        <AceEditor value="funtion() {return 'hello world'; }"
          theme="chaos"
          mode={language.toLocaleLowerCase()}
          name="UNIQUE_ID_OF_DIV"
          fontSize={23}
          wrapEnabled={true}
          showPrintMargin={false}
          highlightActiveLine={false}
          showGutter={false}
          className="ace-editor-container"
        // editorProps={{$blockScrolling:true}}      
        />
      </div>
    </Resizable>
  )
}

export default CodeEditor