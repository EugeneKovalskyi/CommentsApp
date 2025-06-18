import { testData } from '#constants'

import Form from './Form'
import CommentsList from './CommentsList'

import { useImmer } from 'use-immer'
import { useState } from 'react'

export default function App() {
  const [ comments, updateComments ] = useImmer(testData)
  const [ authData, setAuthData ] = useState({
    name: 'Eugene Kovalskyi',
    email: 'tarantul.battlefield@gmail.com',
  })

  return (
    <div className='p-10 text-amber-50'>
      <Form
        updateComments={updateComments}
        updateAuthData={setAuthData}
      />

      <CommentsList
        comments={comments}
        authData={authData}
        updateComments={updateComments}
      />
    </div>
  )
}
