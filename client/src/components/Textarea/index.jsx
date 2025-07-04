import { TEXTAREA_BUTTONS } from '#constants'

import clsx from 'clsx'
import previewOpenSrc from '#public/preview-open.svg'
import previewCloseSrc from '#public/preview-close.svg'

import TextareaAutosize from 'react-textarea-autosize'
import Upload from './Upload'
import FilesPreview from './FilesPreview'

import { useEffect, useRef, useState} from 'react'
import { getXhtmlFromText, addTagToTextarea } from '#utils'

export default function Textarea({
  styleType,
  isAutofocus,
  text,
  uploadedFiles,
  register,
  error,
  updateText,
  updateUploadedFiles
}) {
  const [isPreviewHidden, setIsPreviewHidden] = useState(true)
  const textareaRef = useRef(null)
  const xhtmlContainerRef = useRef(null)
  const togglePreview = () => setIsPreviewHidden(i => !i)

  useEffect(() => {
    if (isPreviewHidden) 
      updateText(text)
    else {
      const xhtml = getXhtmlFromText(text)
      xhtmlContainerRef.current.innerHTML = ''
      xhtmlContainerRef.current.append(xhtml)
    }
  }, [isPreviewHidden])
  
  return (
    <div className='relative'>
      {error && <span className={clsx(
        (styleType === 'reply') && 'absolute left-1/2 -translate-x-1/2 -top-6.5 px-2 border border-neutral-500 rounded-sm bg-neutral-600',
        (styleType === 'comment') && 'absolute left-10 -top-8 px-2',
        ' text-red-300'
      )}>{error.message}</span>}

      <div className='flex w-full border-t border-x rounded-t-md border-b-amber-50/50'>
        <Tags 
          isPreviewHidden={isPreviewHidden}
          textareaRef={textareaRef}
        />

        <Preview
          isPreviewHidden={isPreviewHidden}
          togglePreview={togglePreview}
        />
        
        <Upload updateUploadedFiles={updateUploadedFiles} />
      </div>

      {isPreviewHidden
        ?
        <TextareaAutosize
          className='px-2 py-1 w-full min-h-15 resize-none border rounded-b-sm bg-amber-50/10 hover:bg-amber-50/20'
          autoFocus={isAutofocus}
          placeholder='Enter your text...'
          {...register('text', { required: styleType === 'comment' ? 'is required *' :  'Text is required *'})}
          ref={(elem) => {
            register('text').ref(elem)
            textareaRef.current = elem
          }}
        />
        :
        <div 
          className='px-2 py-1 w-full min-h-15 text-left border rounded-b-sm'
          ref={xhtmlContainerRef}  
        />}

        <FilesPreview uploadedFiles={uploadedFiles} />
    </div>
  )
}

//@ sub-components

function Tags({ isPreviewHidden, textareaRef }) {
  return (
    <div className='flex-1 text-left'>
      {TEXTAREA_BUTTONS.map(({ title, tagName, attributes }) => (
        <div
          className='inline-block px-3 py-1 font-bold border-r cursor-pointer hover:bg-amber-50/10 transition-colors duration-150'
          key={title}
          disabled={!isPreviewHidden}
          onClick={() => addTagToTextarea(textareaRef, tagName, attributes)}
        >
          {title}
        </div>
      ))}
    </div>
  )
}

function Preview({ isPreviewHidden, togglePreview }) {
  return (
    <div className='flex-1 text-center'>
      <img
        className='inline px-8 py-0.5 h-8 font-bold tracking-widest border-x cursor-pointer hover:bg-amber-50/10 transition-colors duration-150'
        src={isPreviewHidden ? previewOpenSrc : previewCloseSrc}
        alt='Preview'
        onClick={togglePreview}
      />
    </div>
  )
}