export function sortByCriterion(comments, criterion, isDescSorting) {
  comments.sort((leftComment, rightComment) => {
    let leftValue = leftComment[criterion]
    let rightValue = rightComment[criterion]

    if (criterion === 'name' || criterion === 'email') {
      leftValue = leftValue.toLowerCase()
      rightValue = rightValue.toLowerCase()
    }

    if (leftValue < rightValue) return -1
    if (leftValue > rightValue) return 1
    if (leftValue === rightValue) return 0
  })

  isDescSorting && comments.reverse()
}
