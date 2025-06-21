import { MAX_FILES_NUMBER } from '#constants'
import { useImmer } from 'use-immer'
import { getFiles } from '#utils'

export default () => {
	const [ uploadedFiles, setUploadedFiles] = useImmer({imgs: [], txts: []})

	const updateUploadedFiles = async (files) => {
  	try {
  	  const { imgs, txts } = await getFiles(files)
  	  const uploadedImgs = imgs.slice(0, MAX_FILES_NUMBER - uploadedFiles.imgs.length)
  	  const uploadedTxts = txts.slice(0, MAX_FILES_NUMBER - uploadedFiles.txts.length)
		
  	  setUploadedFiles(draft => {
  	    uploadedImgs.forEach(img => draft.imgs.push(img))
  	    uploadedTxts.forEach(txt => draft.txts.push(txt))
  	  })
			
  	} catch(error) { console.error(error) }
  }

	return {
		uploadedFiles,
		updateUploadedFiles
	}
}