// ========================================
// IMPORTS SECTION
// ========================================
import React from 'react'

// ========================================
// GALLERY DATA
// ========================================
const images = [
	{
		url: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800',
		size: 'row-span-2',
	},
	{
		url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800',
		size: '',
	},
	{
		url: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&q=80&w=800',
		size: 'col-span-2',
	},
	{
		url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
		size: 'row-span-2',
	},
	{
		url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800',
		size: '',
	},
]

// ========================================
// GALLERY COMPONENT
// ========================================
const Gallery: React.FC = () => {
	// ========================================
	// JSX RENDER
	// ========================================
	return (
		<section id='gallery' className='py-32 px-6 bg-[#050505]'>
			<div className='max-w-7xl mx-auto'>
				<div className='mb-20 flex justify-between items-end'>
					<h2 className='text-5xl font-extrabold uppercase tracking-tighter'>
						Process & Space
					</h2>
					<a
						href='#'
						className='text-xs uppercase tracking-widest border-b border-neutral-700 pb-1 hover:border-white transition-colors'
					>
						View All
					</a>
				</div>

				<div className='grid grid-cols-2 md:grid-cols-3 gap-4 h-[1000px]'>
					{images.map((img, idx) => (
						<div
							key={idx}
							className={`relative overflow-hidden group rounded-sm bg-neutral-900 ${img.size}`}
						>
							<img
								src={img.url}
								alt='Coffee Visual'
								className='w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000'
							/>
							<div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none'>
								<span className='text-white font-bold uppercase tracking-[0.5em] text-xs'>
									Excellence
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Gallery
