import { HOST, MAX_COMMENTS } from '#constants'
import { useState } from 'react'

export default (lastId, updateComments, updateCommentsCount) => {
  const [ criterion, setCriterion ] = useState('date')
  const [ order, setOrder ] = useState('desc')
	const [ commentsShown, setCommentsShown ] = useState(MAX_COMMENTS)

  const sortComments = async (event) => {
    const value = event.target.value
    const response = await fetch(`${HOST}?criterion=${value}&order=${order}`)
    const { comments, count } = await response.json()

    updateComments(() => comments)
    updateCommentsCount(count)
    setCommentsShown(MAX_COMMENTS)
    setCriterion(value)
  }

  const orderComments = async (value) => {
    const response = await fetch(`${HOST}?criterion=${criterion}&order=${value}`)
    const { comments, count } = await response.json()

    updateComments(() => comments)
    setCommentsShown(MAX_COMMENTS)
    updateCommentsCount(count)
    setOrder(value)
  }

  const addMoreComments = async () => {
    const response = await fetch(`${HOST}?lastId=${lastId}&criterion=${criterion}&order=${order}`)
    const { comments} = await response.json()

    updateComments(draft => { draft.push(...comments) })
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

