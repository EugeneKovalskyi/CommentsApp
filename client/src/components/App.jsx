import Form from './Form'
import CommentsList from './CommentsList'

import { useEffect } from 'react'
import { useApp } from '#hooks'

export default function App() {
	const { socket, comments, updateComments, initApp } = useApp()
  
	useEffect(() => initApp(), [])

	return (
		<div className='p-10 text-amber-50'>
			<Form updateComments={updateComments} />

			<CommentsList
				socket={socket}
				comments={comments}
				updateComments={updateComments}
			/>
		</div>
	)
}
