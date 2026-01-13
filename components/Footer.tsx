// ========================================
// IMPORTS SECTION
// ========================================
import React from 'react'

// ========================================
// FOOTER COMPONENT
// ========================================
const Footer: React.FC = () => {
	// ========================================
	// JSX RENDER
	// ========================================
	return (
		<footer className='bg-black py-20 px-6 border-t border-neutral-900'>
			<div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
				<div>
					<span className='text-4xl font-extrabold tracking-tighter uppercase'>
						Noir.
					</span>
				</div>

				<div className='flex gap-12 text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500'>
					<a href='#' className='hover:text-white transition-colors'>
						Instagram
					</a>
					<a href='#' className='hover:text-white transition-colors'>
						Twitter
					</a>
					<a href='#' className='hover:text-white transition-colors'>
						Vimeo
					</a>
					<a href='#' className='hover:text-white transition-colors'>
						Behance
					</a>
				</div>

				<div className='text-neutral-600 text-[10px] uppercase tracking-[0.3em]'>
					&copy; 2024 NOIR COFFEE COLLECTIVE. ALL RIGHTS RESERVED.
				</div>
			</div>
		</footer>
	)
}

export default Footer
