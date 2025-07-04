import txtSrc from '#public/txt.svg'

export default function FilesPreview({ uploadedFiles }) {
	return (
		<div className='mx-auto'>
			{
				!!uploadedFiles.imgs.length
				&&
				<div className='flex items-center mt-4'>
					{uploadedFiles.imgs.map((img, index) => (
						<div
							className='flex-1/5 px-1 max-w-1/5 max-h-60'
							key={index}
						>
							<img
								className='rounded-md shadow-md'
								src={img.src}
								alt={img.name}
							/>
						</div>
					))}
				</div>
			}
			{
				!!uploadedFiles.txts.length
				&&
				<div className='mt-4 text-left'>
					{uploadedFiles.txts.map((txt, index) => (
						<div
							className='inline-block max-w-1/5'
							key={index}
							title={txt.name}
						>
							<a
								className='block ml-2 px-4 pt-1 pb-0.5 truncate border rounded-md border-amber-50/20 hover:bg-amber-50/10 transition-all duration-150'
								href={txt.url}
								download
							>
								<img
									className='inline mr-1 pb-0.5 w-5'
									src={txtSrc}
									alt='TXT'
								/>
								{txt.name}
							</a>
						</div>
					))}
				</div>
			}
		</div>
	)
}