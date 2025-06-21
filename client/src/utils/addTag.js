export function addTagToTextarea(textareaRef, tagName, attributes) {
  const textarea = textareaRef.current
  const from = textarea.selectionStart
  const to = textarea.selectionEnd
	const openTag = '<' + tagName + attributes + '>'
	const closeTag = '</' + tagName + '>'

  if (from === to) {
    textarea.setRangeText(openTag + closeTag, from, to)
    textarea.selectionStart += openTag.length
  } else {
    const selectedText = textarea.value.slice(from, to)
    const taggedText = openTag + selectedText + closeTag
    textarea.setRangeText(taggedText)
    textarea.selectionEnd = textarea.selectionStart += taggedText.length
  }

  textarea.focus()
}
