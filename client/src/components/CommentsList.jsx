import { MAX_COMMENTS } from '#constants'
import clsx from 'clsx'
import { primaryButton } from '#styles'

import Tools from './Tools'
import Comment from './Comment'

import { useEffect, useState } from 'react'
import { useTools } from '#hooks'
import { sortByCriterion } from '#utils'

export default function CommentsList({ comments, authData, updateComments }) {
	const [ commentsShown, setCommentsShown ] = useState(MAX_COMMENTS)
  const { 
		sortingCriterion, 
		isDescSorting, 
		handleSortByCriterion, 
		handleChangeOrder 
	} = useTools(updateComments)

  useEffect(
    () =>
      updateComments(draft => {
        sortByCriterion(draft, sortingCriterion, isDescSorting)
      }),
    []
  )

  return (
    <div className='relative mx-auto mt-12 pb-3 w-full 2xl:w-1/2 border-2 border-amber-50/50 rounded-md bg-amber-50/20'>
      <Tools
        sortingCriterion={sortingCriterion}
        isDescSorting={isDescSorting}
        handleSortByCriterion={handleSortByCriterion}
        handleChangeOrder={handleChangeOrder}
      />

      <div className='mt-8 mb-5 mx-5'>
        {comments.slice(0, commentsShown).map((comment) => 
          <Comment
            key={comment.id}
            comment={comment}
            authData={authData}
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