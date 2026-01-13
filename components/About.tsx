// ========================================
// IMPORTS SECTION
// ========================================
import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'

// ========================================
// ABOUT COMPONENT
// ========================================
const About: React.FC = () => {
	// ========================================
	// REFS
	// ========================================
	const imageRef = useRef<HTMLDivElement>(null)
	const textRef = useRef<HTMLDivElement>(null)

	// ========================================
	// GSAP ANIMATIONS
	// ========================================
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(imageRef.current, {
				scale: 1.2,
				opacity: 0,
				duration: 2,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: imageRef.current,
					start: 'top 80%',
					end: 'bottom 20%',
					scrub: 1,
				},
			})
		})
		return () => ctx.revert()
	}, [])

	// ========================================
	// JSX RENDER
	// ========================================
	return (
		<section
			id='about'
			className='py-32 px-6 bg-black border-t border-neutral-900'
		>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center'>
				<div
					ref={imageRef}
					className='relative aspect-square overflow-hidden rounded-sm bg-neutral-900'
				>
					<img
						src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000'
						alt='Crafting Coffee'
						className='w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000'
					/>
				</div>

				<div ref={textRef} className='space-y-8'>
					<div className='inline-block border-l-2 border-white pl-4'>
						<h2 className='text-4xl md:text-5xl font-extrabold uppercase tracking-tighter'>
							The Alchemy of the Bean
						</h2>
					</div>
					<p className='text-neutral-400 text-lg leading-relaxed'>
						Founded on the principle that coffee is not just a drink, but a
						medium for connection and contemplation. We spent decades perfecting
						our proprietary roasting method that preserves the delicate floral
						notes of the bean while achieving an unparalleled depth of darkness.
					</p>
					<div className='grid grid-cols-2 gap-8 border-t border-neutral-800 pt-8'>
						<div>
							<span className='block text-3xl font-bold'>100%</span>
							<span className='text-xs uppercase tracking-widest text-neutral-500'>
								Single Origin
							</span>
						</div>
						<div>
							<span className='block text-3xl font-bold'>24hr</span>
							<span className='text-xs uppercase tracking-widest text-neutral-500'>
								Cold Extraction
							</span>
						</div>
					</div>
					<p className='text-neutral-500 italic font-display text-xl'>
						"We don't brew coffee. We engineer moments of absolute clarity."
					</p>
				</div>
			</div>
		</section>
	)
}

export default About
