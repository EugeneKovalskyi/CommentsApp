export default function FilesPreview({ uploadedFiles }) {
  return (
    <div className='mt-4 mx-auto '>
      <div className='flex items-center'>
        {uploadedFiles.imgs.map((img) => (
          <div
            className='flex-1/5 px-1 max-w-1/5 max-h-60'
            key={img.id}
          >
            <img
              className='rounded-md shadow-md'
              key={img.id}
              src={img.src}
              alt={img.name}
              width={img.width}
              height={img.height}
            />
          </div>
        ))}
      </div>
			
      <div className='mt-4 text-left'>
        {uploadedFiles.txts.map((txt) => (
          <div
            className='inline-block px-1 max-w-1/5'
            key={txt.id}
            title={txt.name}
          >
            <div className='px-4 py-1 rounded-md truncate bg-amber-50/10'>
              {txt.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
