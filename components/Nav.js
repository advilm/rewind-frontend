import React from 'react';
import Link from 'next/link';

export default function Nav() {
	return (
		<nav className='py-4 bg-primary-light text-xl'>
			<div className='flex justify-between ml-2'>
				<Link href='/'>
					<a className='flex items-center'>
						<img src='favicon.ico' alt='logo' width='32' height='32' className='mx-2'></img>
						<strong>Rewind</strong>
					</a>
				</Link>
				<div className='items-end'>
					<a href='https://discord.gg/EbJzhBqu2U' target='_blank' rel='noreferrer' className='px-4 border-r'>Discord</a>
					<a href='https://github.com/advilm/rewind-frontend' target='_blank' rel='noreferrer' className='px-4'>GitHub</a>
				</div>
			</div>
		</nav>
	);
}