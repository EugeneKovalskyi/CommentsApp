import { HOST } from '#constants'

import { useImmer } from 'use-immer'
import { useState } from 'react'
import { localAuth } from '#utils'

export default () => {
	const [ comments, updateComments ] = useImmer([])
	const [ commentsCount, setCommentsCount ] = useState(0)

	const initApp = () => {
		const getMainComments = async () => {
			const response = await fetch(`${HOST}?shown=0&criterion=date&order=desc`)
			const data = await response.json()

			updateComments(() => data.comments)
			setCommentsCount(data.count)
    }

		getMainComments()
    localAuth()
	}

	return {
		comments,
		commentsCount,
		updateComments,
		initApp
	}
}