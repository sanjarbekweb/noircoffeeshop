// ========================================
// IMPORTS SECTION
// ========================================
import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'

// ========================================
// CONTACT COMPONENT
// ========================================
const Contact: React.FC = () => {
	// ========================================
	// REFS
	// ========================================
	const btnRef = useRef<HTMLButtonElement>(null)

	// ========================================
	// GSAP ANIMATIONS
	// ========================================
	useLayoutEffect(() => {
		if (btnRef.current) {
			const btn = btnRef.current
			const onMouseMove = (e: MouseEvent) => {
				const rect = btn.getBoundingClientRect()
				const x = e.clientX - rect.left - rect.width / 2
				const y = e.clientY - rect.top - rect.height / 2
				gsap.to(btn, {
					x: x * 0.2,
					y: y * 0.2,
					duration: 0.4,
					ease: 'power2.out',
				})
			}
			const onMouseLeave = () => {
				gsap.to(btn, {
					x: 0,
					y: 0,
					duration: 0.6,
					ease: 'elastic.out(1, 0.4)',
				})
			}
			btn.addEventListener('mousemove', onMouseMove)
			btn.addEventListener('mouseleave', onMouseLeave)
			return () => {
				btn.removeEventListener('mousemove', onMouseMove)
				btn.removeEventListener('mouseleave', onMouseLeave)
			}
		}
	}, [])

	// ========================================
	// JSX RENDER
	// ========================================
	return (
		<section
			id='contact'
			className='py-40 px-6 bg-black border-t border-neutral-900'
		>
			<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32'>
				<div>
					<span className='text-[10px] tracking-[0.6em] text-neutral-600 uppercase block mb-8 font-extrabold'>
						Contact Us
					</span>
					<h2 className='text-6xl md:text-8xl font-extrabold uppercase tracking-tighter mb-10 leading-[0.9]'>
						Let's Talk Coffee.
					</h2>
					<p className='text-neutral-400 text-xl mb-16 max-w-md font-light leading-relaxed'>
						Whether you're looking for a consultation, a wholesale partnership,
						or simply a table for two. We respond within 24 hours.
					</p>

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
						<div>
							<span className='text-[10px] uppercase tracking-[0.3em] text-neutral-600 block mb-2 font-bold'>
								Address
							</span>
							<p className='text-lg font-medium'>
								422 Shibuya Crossing
								<br />
								Tokyo, Japan
							</p>
						</div>
						<div>
							<span className='text-[10px] uppercase tracking-[0.3em] text-neutral-600 block mb-2 font-bold'>
								Hours
							</span>
							<p className='text-lg font-medium'>
								Mon — Sun
								<br />
								06:00 - 22:00
							</p>
						</div>
					</div>
				</div>

				<form className='space-y-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<div className='relative group'>
							<input
								type='text'
								placeholder='Name'
								className='w-full bg-transparent border-b border-neutral-800 py-6 focus:border-white transition-colors outline-none uppercase tracking-widest text-[10px] font-bold'
							/>
							<div className='absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full'></div>
						</div>
						<div className='relative group'>
							<input
								type='email'
								placeholder='Email'
								className='w-full bg-transparent border-b border-neutral-800 py-6 focus:border-white transition-colors outline-none uppercase tracking-widest text-[10px] font-bold'
							/>
							<div className='absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full'></div>
						</div>
					</div>
					<div className='relative group'>
						<textarea
							rows={4}
							placeholder='Your Message'
							className='w-full bg-transparent border-b border-neutral-800 py-6 focus:border-white transition-colors outline-none uppercase tracking-widest text-[10px] font-bold resize-none'
						></textarea>
						<div className='absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full'></div>
					</div>
					<button
						ref={btnRef}
						className='w-full py-8 bg-white text-black font-black uppercase tracking-[0.4em] hover:bg-neutral-100 transition-all duration-500 rounded-sm text-[10px] shadow-2xl active:scale-[0.98]'
					>
						Send Inquiry
					</button>
				</form>
			</div>
		</section>
	)
}

export default Contact
