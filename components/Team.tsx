// ========================================
// IMPORTS SECTION
// ========================================
import React from 'react'

// ========================================
// TEAM DATA
// ========================================
const team = [
	{
		name: 'Kaelen Vance',
		role: 'Head Roaster',
		img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
	},
	{
		name: 'Elena Rossi',
		role: 'Chief Barista',
		img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600',
	},
	{
		name: 'Marcus Thorne',
		role: 'Quality Control',
		img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
	},
	{
		name: 'Suki Sato',
		role: 'Sourcing Expert',
		img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
	},
]

// ========================================
// TEAM COMPONENT
// ========================================
const Team: React.FC = () => {
	// ========================================
	// JSX RENDER
	// ========================================
	return (
		<section id='team' className='py-32 px-6 bg-black'>
			<div className='max-w-7xl mx-auto'>
				<div className='mb-24 text-center'>
					<span className='text-[10px] tracking-[0.8em] text-neutral-600 uppercase font-extrabold block mb-4'>
						The Talent
					</span>
					<h2 className='text-6xl font-extrabold uppercase tracking-tighter'>
						The Curators
					</h2>
					<div className='w-16 h-[2px] bg-white mx-auto mt-8'></div>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
					{team.map((member, idx) => (
						<div key={idx} className='group cursor-pointer'>
							<div
								data-tilt
								className='aspect-[4/5] overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000 bg-neutral-900 shadow-2xl'
							>
								<img
									src={member.img}
									alt={member.name}
									className='w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110'
								/>
							</div>
							<div className='mt-8 border-l border-neutral-800 pl-6 group-hover:border-white transition-colors duration-500'>
								<h4 className='text-xl font-black uppercase tracking-tight group-hover:text-white transition-colors'>
									{member.name}
								</h4>
								<p className='text-neutral-600 uppercase text-[9px] tracking-[0.4em] font-bold mt-2 group-hover:text-neutral-400'>
									{member.role}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Team
