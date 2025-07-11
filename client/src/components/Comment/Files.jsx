import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import txtSrc from '#public/txt.svg'
import { useMemo, useState } from 'react'

export default function Files({ imgs, txts }) {
	const [ isOpen, setIsOpen ] = useState(false)

	const slides = useMemo(() => imgs.map(img => ({
		src: img.url,
		alt: img.name,
		width: img.width,
		height: img.height,
	})), [imgs])

	return (
		<div className=''>
			{
				!!imgs.length
				&&
				<div className='flex items-center px-2 py-4 border-b border-amber-50/10'>
					{imgs.map(img => 
						<div 
							className='flex-1/5 px-2 max-w-1/5 max-h-60'
							key={img.id}
						>
							<img 
								className='rounded-lg shadow-xl cursor-pointer hover:outline-2 hover:scale-105 outline-amber-50/50 transition-transform duration-300'
								src={img.url}
								alt={img.name}
								width={img.width}
								height={img.height}
								onClick={() => setIsOpen(true)}
							/>
						</div>
					)}

					<Lightbox 
						open={isOpen}
						close={() => setIsOpen(false)}
						slides={slides}
						styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}
					/>
				</div>
			}
			{
				!!txts.length
				&&
				<div className='px-2 py-4 border-b border-amber-50/10'>
					{txts.map(txt =>
						<div 
							className='inline-block max-w-1/5'
							key={txt.id}
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

					)}
				</div>
			}
		</div>
	)
}