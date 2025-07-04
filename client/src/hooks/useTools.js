import { HOST, MAX_COMMENTS } from '#constants'
import { useState } from 'react'

export default (updateComments) => {
  const [ criterion, setCriterion ] = useState('date')
  const [ order, setOrder ] = useState('desc')
	const [ commentsShown, setCommentsShown ] = useState(MAX_COMMENTS)

  const sortComments = async (event) => {
    const value = event.target.value
    const response = await fetch(`${HOST}?criterion=${value}&order=${order}`)
    const { comments } = await response.json()

    updateComments(() => comments)
    setCommentsShown(MAX_COMMENTS)
    setCriterion(value)
  }

  const orderComments = async (value) => {
    const response = await fetch(`${HOST}?criterion=${criterion}&order=${value}`)
    const { comments } = await response.json()

    updateComments(() => comments)
    setCommentsShown(MAX_COMMENTS)
    setOrder(value)
  }

  const addMoreComments = async () => {
    const response = await fetch(`${HOST}?shown=${commentsShown}&criterion=${criterion}&order=${order}`)
    const { comments } = await response.json()

    updateComments(draft => {
      draft.push(...comments)
    })
    
    setCommentsShown(cs => cs + 25)
  }

	return {
		criterion,
    order,
    commentsShown,
		sortComments,
    orderComments,
    addMoreComments
	}
}

