import homeSrc from '#public/home.svg'
import { useState } from 'react'

export default function Header({ 
  user,
  date,
  showRepliesAndForm
}) {
  return (
    <div className='relative px-5 py-3 rounded-t-md bg-amber-50/10'>
      <span className='font-bold'>{user.name}</span>
      <span className='mx-4 text-amber-50/50'>|</span>

      <Date date={date} />
      <span className='mx-4 text-amber-50/50'>|</span>

      <ReplyBtn showRepliesAndForm={showRepliesAndForm} />
      <span className='mx-4 text-amber-50/50'>|</span>

      {
        user.homePage 
        && 
        <HomePage homePage={user.homePage} />
      }
      <Email email={user.email} />
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
      {DMY + ' at ' + hours + ':' + minutes}
    </span>
  )
}

function ReplyBtn({ showRepliesAndForm }) {
  return (
    <button
      className='text-amber-50/70 cursor-pointer hover:underline'
      onClick={showRepliesAndForm}
    >
      Reply
    </button>
  )
}

function HomePage({ homePage }) {
  return (
      <a 
      className='mr-2 p-1 rounded-md text-amber-50/70 cursor-pointer hover:bg-amber-50/10'
        href={homePage}
        target='_blank'
      >
        <img className='inline w-5' src={homeSrc} alt="HomePage" />
      </a>
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
        className='px-1.5 py-1 rounded-md text-amber-50/70 cursor-pointer hover:bg-amber-50/10'
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

