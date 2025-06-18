import uploadSrc from '#public/upload.svg'
import { useId } from 'react'

export default function Upload({ updateUploadedFiles }) {
	const id = useId()

	return (
		<div className='flex-1 h-8 text-right'>
			<label htmlFor={id}>
				<img 
					className='inline px-2 py-1 h-8 border-l cursor-pointer hover:bg-amber-50/10'
					src={uploadSrc} 
					alt="AddFile" 
				/>
			</label>

			<input 
				className='-z-50 w-0 h-0' 
				id={id}
				type='file' 
				accept='.jpg, .gif, .png, .txt' 
				multiple
				onChange={e => {console.log(e.target.files); updateUploadedFiles(e.target.files)}}
			/>
		</div>
	)
}