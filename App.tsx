// ========================================
// IMPORTS SECTION
// ========================================
// React and hooks
import React, { useEffect, useLayoutEffect, useRef } from 'react'
// Animation libraries
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import VanillaTilt from 'vanilla-tilt'
// Component imports
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Team from './components/Team'

// ========================================
// GSAP PLUGIN REGISTRATION
// ========================================
gsap.registerPlugin(ScrollTrigger)

// ========================================
// MAIN APP COMPONENT
// ========================================
const App: React.FC = () => {
	// ========================================
	// REFS AND STATE
	// ========================================
	const mainRef = useRef<HTMLDivElement>(null)

	// ========================================
	// SMOOTH SCROLL AND TILT INITIALIZATION
	// ========================================
	useEffect(() => {
		// Initialize Smooth Scroll (Lenis)
		const lenis = new Lenis({
			duration: 1.2,
			easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
		})

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)

		lenis.on('scroll', ScrollTrigger.update)

		gsap.ticker.add(time => {
			lenis.raf(time * 1000)
		})

		gsap.ticker.lagSmoothing(0)

		// Initialize Vanilla Tilt
		const tiltElements = document.querySelectorAll<HTMLElement>('[data-tilt]')
		VanillaTilt.init(Array.from(tiltElements), {
			max: 15,
			speed: 400,
			glare: true,
			'max-glare': 0.2,
			scale: 1.02,
			perspective: 1000,
		})

		return () => {
			lenis.destroy()
			tiltElements.forEach((el: any) => el.vanillaTilt?.destroy())
		}
	}, [])

	// ========================================
	// GSAP ANIMATIONS SETUP
	// ========================================
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// Global Smooth Reveal for Sections
			const sections = gsap.utils.toArray('section')
			sections.forEach((section: any) => {
				gsap.from(section, {
					opacity: 0,
					y: 40,
					duration: 1,
					ease: 'expo.out',
					scrollTrigger: {
						trigger: section,
						start: 'top 90%',
						end: 'top 20%',
						toggleActions: 'play none none reverse',
					},
				})
			})
		}, mainRef)

		return () => ctx.revert()
	}, [])

	// ========================================
	// JSX RENDER
	// ========================================
	return (
		<div
			ref={mainRef}
			className='bg-black text-white selection:bg-white selection:text-black'
		>
			{/* Navigation Bar */}
			<Navbar />
			<main>
				{/* Hero Section */}
				<Hero />
				{/* About Section */}
				<About />
				{/* Services Section */}
				<Services />
				{/* Team Section */}
				<Team />
				{/* Gallery Section */}
				<Gallery />
				{/* Contact Section */}
				<Contact />
			</main>
			{/* Footer */}
			<Footer />
		</div>
	)
}

export default App
