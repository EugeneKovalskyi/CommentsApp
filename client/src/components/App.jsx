import Form from './Form'
import CommentsList from './CommentsList'

import { useEffect } from 'react'
import { useApp } from '#hooks'

export default function App() {
	const {
		comments,
		commentsCount,
		updateComments,
		updateCommentsCount,
		initApp
	} = useApp()
  
	useEffect(() => { initApp() }, [])

	return (
		<div className='p-10 text-amber-50'>
			<Form updateComments={updateComments} />

			<CommentsList
				comments={comments}
				commentsCount={commentsCount}
				updateComments={updateComments}
				updateCommentsCount={updateCommentsCount}
			/>
		</div>
	)
}
