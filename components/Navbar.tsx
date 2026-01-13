// ========================================
// IMPORTS SECTION
// ========================================
import React, { useEffect, useState } from 'react'

// ========================================
// NAVBAR COMPONENT
// ========================================
const Navbar: React.FC = () => {
	// ========================================
	// STATE MANAGEMENT
	// ========================================
	const [isScrolled, setIsScrolled] = useState(false)

	// ========================================
	// SCROLL EFFECT
	// ========================================
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// ========================================
	// NAVIGATION DATA
	// ========================================
	const navItems = [
		{ name: 'About', href: '#about' },
		{ name: 'Services', href: '#services' },
		{ name: 'Team', href: '#team' },
		{ name: 'Gallery', href: '#gallery' },
		{ name: 'Contact', href: '#contact' },
	]

	// ========================================
	// JSX RENDER
	// ========================================
	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
				isScrolled
					? 'bg-black/90 backdrop-blur-md border-neutral-800 py-4'
					: 'bg-transparent border-transparent py-8'
			}`}
		>
			<div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
				<a
					href='#'
					className='text-2xl font-extrabold tracking-tighter uppercase'
				>
					Noir<span className='text-neutral-500'>.</span>
				</a>

				<div className='hidden md:flex gap-10'>
					{navItems.map(item => (
						<a
							key={item.name}
							href={item.href}
							className='text-xs uppercase tracking-[0.2em] font-medium text-neutral-400 hover:text-white transition-colors duration-300'
						>
							{item.name}
						</a>
					))}
				</div>

				<button className='text-xs uppercase tracking-[0.2em] font-bold border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all duration-300 rounded-sm'>
					Reserve
				</button>
			</div>
		</nav>
	)
}

export default Navbar
