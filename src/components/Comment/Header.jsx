import { useState } from 'react'

export default function Header({ 
  name, 
  date, 
  email, 
  toggleAnswerForm
}) {

  return (
    <div className='relative px-5 py-3 rounded-t-md bg-amber-50/10'>
      <span className='font-bold'>{name}</span>
      <span className='mx-4 text-amber-50/50'>|</span>
      <Date date={date} />
      <span className='mx-4 text-amber-50/50'>|</span>
      <AnswerBtn toggleAnswerForm={toggleAnswerForm} />
      <span className='mx-4 text-amber-50/50'>|</span>
      <Email email={email} />
    </div>
  )
}

//@ components

function Date({ date }) {
  const DMY = date.toLocaleDateString()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return (
    <span className='text-amber-50/70'>
      {
        DMY + ' at ' + hours + ':' + minutes
      }
    </span>
  )
}

function AnswerBtn({ toggleAnswerForm }) {
  return (
    <button
      className='text-amber-50/70 cursor-pointer hover:underline'
      onClick={toggleAnswerForm}
    >
      Answer
    </button>
  )
}

function Email({ email }) {
  const [ isEmailPopup, setIsEmailPopup ] = useState(false)

  return (
    <>
      {
        isEmailPopup 
        &&
        <button className='absolute -translate-x-1/3 -translate-y-14 px-4 py-2 rounded-md bg-black/30'>
          Email copied!
        </button>
      }
      <span
        className='px-2.5 py-2 rounded-full text-amber-50/70 cursor-pointer hover:bg-amber-50/10'
        onClick={() => {
          navigator.clipboard.writeText(email)
          setIsEmailPopup(true)
          setTimeout(() => setIsEmailPopup(false), 1500)
        }}
      >
        @
      </span>
    </>
  )
}