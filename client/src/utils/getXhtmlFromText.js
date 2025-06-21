import { MAX_TAGS_NESTING_DEPTH } from '#constants'

export default function getXhtmlFromText(
  parentContent, 
	parentElem = document.createElement('span'),
	tagNestingDepth = 0
) {
  if (tagNestingDepth === MAX_TAGS_NESTING_DEPTH) {
    console.warn('Recursion: Tags nesting depth limit arrived!')
    parentElem.textContent = parentContent
    return
  }

	const regexp = /<(?<tagName>strong|i|code|a)(?<attributes>\s[a-zA-Z_]+=["'][^'"].+["'])*>(?<content>.+?)<\/\1>/sgi
  const matches = [...parentContent.matchAll(regexp)]
  const lastIndex = matches.length - 1
  let lastOffset = 0

  if (!matches.length)
    parentElem.textContent = parentContent

  matches.forEach((match, index) => {
    const { tagName, attributes, content } = match.groups
    const elem = document.createElement(tagName)

    const input = match.input
    const offset = match.index
    const textBeforeBegin = input.slice(lastOffset, offset)

    lastOffset = offset + match[0].length

    attributes?.trim().split(' ').forEach((attr) => {
        const name = attr.match(/^[a-zA-Z_]+(?==)/)[0]
        const value = attr.match(/(?<=['"])[^'"].+(?=['"])/)[0]
        elem.setAttribute(name, value)
      })

    parentElem.append(textBeforeBegin)
    parentElem.append(elem)

    if (index === lastIndex) {
      const textAfterEnd = input.slice(lastOffset)
      parentElem.append(textAfterEnd)
    }

    if (content.search(regexp) === -1) 
			elem.textContent = content
    else 
			getXhtmlFromText(content, elem, tagNestingDepth + 1)
  })

  return parentElem
}

const test = `Start. <strong>Hello</strong> <i>my</i> <code>let name = 'Eugene'</code>, here is my <a href='https://github.com/EugeneKovalskyi' title="GitHub">GitHub</a>.
<strong>I learn <code>JavaScript</code> 2 years.</strong>
<script>It's XSS</script>. End.`