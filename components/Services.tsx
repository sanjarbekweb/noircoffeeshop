// ========================================
// IMPORTS SECTION
// ========================================
import React from 'react'

// ========================================
// SERVICES DATA
// ========================================
const services = [
	{
		title: 'The Ritual',
		desc: 'Our signature multi-stage espresso tasting flight designed for the curious palate.',
		icon: '☕',
	},
	{
		title: 'Precision Brew',
		desc: 'Vacuum-sealed single-origin beans prepared using a custom V60 slow-pour technique.',
		icon: '🧪',
	},
	{
		title: 'Midnight Cold',
		desc: 'Our 24-hour slow-drip extraction served over clear, hand-carved crystal ice blocks.',
		icon: '🧊',
	},
	{
		title: 'Private Roast',
		desc: 'Personalized roasting sessions where we craft a blend tailored to your specific preferences.',
		icon: '🔥',
	},
]

// ========================================
// SERVICES COMPONENT
// ========================================
const Services: React.FC = () => {
	// ========================================
	// JSX RENDER
	// ========================================
	return (
		<section id='services' className='py-32 px-6 bg-[#050505]'>
			<div className='max-w-7xl mx-auto'>
				<div className='flex flex-col md:flex-row justify-between items-end mb-24 gap-6'>
					<div className='max-w-xl'>
						<span className='text-xs tracking-[0.6em] text-neutral-600 uppercase block mb-4 font-bold'>
							Curated Offerings
						</span>
						<h2 className='text-5xl md:text-6xl font-extrabold uppercase tracking-tighter'>
							Services of Distinction
						</h2>
					</div>
					<div className='h-[1px] flex-grow bg-neutral-900 mx-10 hidden md:block opacity-50'></div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
					{services.map((service, idx) => (
						<div
							key={idx}
							data-tilt
							className='group border border-neutral-900 p-12 hover:bg-white hover:text-black transition-all duration-700 rounded-sm flex flex-col justify-between aspect-square cursor-pointer bg-black/50 backdrop-blur-sm shadow-2xl'
						>
							<div className='tilt-content'>
								<div className='text-5xl mb-12 group-hover:scale-125 transition-transform duration-700 ease-expo origin-left'>
									{service.icon}
								</div>
								<h3 className='text-2xl font-black uppercase mb-4 tracking-tighter group-hover:tracking-normal transition-all duration-500'>
									{service.title}
								</h3>
								<p className='text-neutral-500 group-hover:text-neutral-700 text-sm leading-relaxed font-light'>
									{service.desc}
								</p>
							</div>
							<div className='pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
								<span className='text-[10px] font-bold tracking-[0.3em] uppercase underline underline-offset-4'>
									Learn More
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
