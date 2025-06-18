import { useState } from 'react'
import { sortByCriterion } from '#utils/sortComments'

export default (updateComments) => {
  const [ sortingCriterion, setSortingCriterion ] = useState('date')
  const [ isDescSorting, setIsDescSorting ] = useState(true)

  const handleSortByCriterion = (event) => {
    const criterion = event.target.value
    setSortingCriterion(criterion)
    updateComments(draft => sortByCriterion(draft, criterion, isDescSorting))
  }

  const handleChangeOrder = () => {
    setIsDescSorting(current => !current)
    updateComments(draft => { draft.reverse() })
  }
  
	return {
		sortingCriterion,
		isDescSorting,
		handleSortByCriterion,
		handleChangeOrder
	}
}

