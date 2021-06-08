import React from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { useEffect, useRef } from 'react'

export default function TextEditor() {
  const wrapperRef = useRef()

  useEffect(() => {
    const editor =  document.createElement('div')
    wrapperRef.current.append(editor)
    new Quill("#container",  { theme: "snow" })
  }, [])

  return (
    <div id="container" ref={wrapperRef}>
      Text Editor
    </div>
  )
}
