// ========================================
// IMPORTS SECTION
// ========================================
import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'

// ========================================
// HERO COMPONENT
// ========================================
const Hero: React.FC = () => {
	// ========================================
	// REFS
	// ========================================
	const containerRef = useRef<HTMLDivElement>(null)
	const headlineRef = useRef<HTMLHeadingElement>(null)
	const btnRef = useRef<HTMLButtonElement>(null)

	// ========================================
	// GSAP ANIMATIONS
	// ========================================
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// Text Reveal Animation
			const chars = headlineRef.current?.innerText.split('')
			if (headlineRef.current) {
				headlineRef.current.innerHTML =
					chars
						?.map(
							c =>
								`<span class="reveal-char">${c === ' ' ? '&nbsp;' : c}</span>`
						)
						.join('') || ''
			}

			gsap.to('.reveal-char', {
				opacity: 1,
				y: 0,
				duration: 1.2,
				stagger: 0.03,
				ease: 'expo.out',
				delay: 0.2,
			})

			// CTA Animation
			gsap.from('.hero-cta', {
				opacity: 0,
				y: 30,
				duration: 1.5,
				delay: 1.2,
				ease: 'power4.out',
			})

			// Divider Animation
			gsap.from('.hero-divider', {
				scaleX: 0,
				transformOrigin: 'left',
				duration: 2,
				delay: 0.8,
				ease: 'expo.inOut',
			})

			// Magnetic Button Effect
			if (btnRef.current) {
				const btn = btnRef.current
				const onMouseMove = (e: MouseEvent) => {
					const rect = btn.getBoundingClientRect()
					const x = e.clientX - rect.left - rect.width / 2
					const y = e.clientY - rect.top - rect.height / 2
					gsap.to(btn, {
						x: x * 0.3,
						y: y * 0.3,
						duration: 0.5,
						ease: 'power3.out',
					})
				}
				const onMouseLeave = () => {
					gsap.to(btn, {
						x: 0,
						y: 0,
						duration: 0.7,
						ease: 'elastic.out(1, 0.3)',
					})
				}
				btn.addEventListener('mousemove', onMouseMove)
				btn.addEventListener('mouseleave', onMouseLeave)
			}
		}, containerRef)

		return () => ctx.revert()
	}, [])

	// ========================================
	// JSX RENDER
	// ========================================
	return (
		<section
			ref={containerRef}
			className='h-screen flex flex-col justify-center px-6 relative overflow-hidden bg-black'
		>
			<div className='max-w-7xl mx-auto w-full z-10'>
				<div className='mb-4 text-[10px] tracking-[0.8em] text-neutral-500 uppercase font-extrabold opacity-70'>
					Established 1994 — Tokyo
				</div>

				<h1
					ref={headlineRef}
					className='text-[12vw] md:text-[8vw] leading-[0.85] font-extrabold tracking-tighter uppercase select-none'
				>
					Crafting the Essence of Darkness
				</h1>

				<div className='hero-divider h-[1px] w-48 bg-neutral-800 my-12'></div>

				<div className='hero-cta flex flex-col md:flex-row gap-12 items-start md:items-center'>
					<p className='max-w-md text-neutral-400 text-lg leading-relaxed font-light'>
						Where precision meets passion. We source only the rarest beans,
						roasted to perfection for those who appreciate the silence in a cup.
					</p>
					<button
						ref={btnRef}
						className='group relative overflow-hidden bg-white text-black px-12 py-6 rounded-sm font-bold uppercase tracking-widest text-xs transition-shadow duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]'
					>
						<span className='relative z-10 transition-colors duration-300 group-hover:text-black'>
							Explore the Menu
						</span>
						<div className='absolute inset-0 bg-neutral-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo'></div>
					</button>
				</div>
			</div>

			{/* Background Decor */}
			<div className='absolute top-1/2 right-[-10%] translate-y-[-50%] opacity-10 pointer-events-none select-none'>
				<span className='text-[50vw] font-black text-neutral-800 leading-none tracking-tighter'>
					NOIR
				</span>
			</div>
		</section>
	)
}

export default Hero
