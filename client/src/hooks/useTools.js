import { useState } from 'react'
import { sortComments } from '#utils'

export default (updateComments) => {
  const [ sortingCriterion, setSortingCriterion ] = useState('date')
  const [ isDescSorting, setIsDescSorting ] = useState(true)

  const handleSortComments = (event) => {
    const criterion = event.target.value
    
    setSortingCriterion(criterion)
    updateComments(draft => {
      sortComments(draft, criterion, isDescSorting)
    })
  }

  const handleChangeOrder = () => {
    setIsDescSorting(current => !current)
    updateComments(draft => { draft.reverse() })
  }
  
	return {
		sortingCriterion,
		isDescSorting,
		handleSortComments,
		handleChangeOrder
	}
}

