import { MAX_COMMENTS } from '#constants'
import clsx from 'clsx'
import { primaryButton } from '#styles'

import Tools from './Tools'
import Comment from './Comment'
import { useTools } from '#hooks'

export default function CommentsList({ 
  comments,
  commentsCount,
  updateComments 
}) {
  const {
    criterion,
    order,
    commentsShown,
    sortComments,
    orderComments,
    addMoreComments
	} = useTools(updateComments)

  return (
    <div className='relative mx-auto mt-12 pb-8 w-full 2xl:w-1/2 border-2 border-amber-50/50 rounded-md bg-amber-50/20'>
      <Tools
        criterion={criterion}
        order={order}
        sortComments={sortComments}
        orderComments={orderComments}
      />

      <div className='mt-8 px-8'>
        {comments.slice(0, commentsShown).map((comment) => 
          <Comment
            key={comment.id}
            comment={comment}
          />
        )}
      </div>

      {
        commentsShown < commentsCount
        &&
        <button
          className={clsx('block mx-auto mt-8', primaryButton)}
          onClick={addMoreComments}
        >
          + {MAX_COMMENTS} comments
        </button>
      }
    </div>
  )
}