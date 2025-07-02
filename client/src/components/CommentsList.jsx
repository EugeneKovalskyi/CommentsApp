import { MAX_COMMENTS } from '#constants'

import clsx from 'clsx'
import { primaryButton } from '#styles'

import Tools from './Tools'
import Comment from './Comment'

import { useState } from 'react'
import { useTools } from '#hooks'

export default function CommentsList({ 
  socket, 
  comments, 
  updateComments 
}) {
	const [ commentsShown, setCommentsShown ] = useState(MAX_COMMENTS)
  const { 
		sortingCriterion, 
		isDescSorting, 
		handleSortComments, 
		handleChangeOrder 
	} = useTools(updateComments)

  return (
    <div className='relative mx-auto mt-12 pb-3 w-full 2xl:w-1/2 border-2 border-amber-50/50 rounded-md bg-amber-50/20'>
      <Tools
        sortingCriterion={sortingCriterion}
        isDescSorting={isDescSorting}
        handleSortComments={handleSortComments}
        handleChangeOrder={handleChangeOrder}
      />

      <div className='mt-8 mb-5 mx-5'>
        {comments.slice(0, commentsShown).map((comment) => 
          <Comment
            socket={socket}
            key={comment.id}
            comment={comment}
            updateComments={updateComments}
          />
        )}
      </div>

      {
        commentsShown < comments.length
        &&
        <button
          className={clsx('block mx-auto mt-8', primaryButton)}
          onClick={() => setCommentsShown(cs => cs + 25)}
        >
          + {MAX_COMMENTS} comments
        </button>
      }
    </div>
  )
}