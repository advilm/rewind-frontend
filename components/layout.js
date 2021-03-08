import React from 'react';
import Head from 'next/head';

export default function Layout({
	children,
	title = 'Rewind',
}) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className='flex flex-col bg-primary h-screen text-primary-text'>
				<nav className='py-4 bg-primary-light text-xl'>
					<div className='flex items-strech justify-between'>
						<div className='flex items-center'>
							<img src='favicon.ico' width='32' height='32' className='ml-4 mr-2'></img>
							<strong>Rewind</strong>
						</div>
						<div className='items-end'>
							<a href='https://discord.gg/EbJzhBqu2U' target='_blank' rel='noreferrer' className='px-4 border-r'>Discord</a>
							<a href='https://github.com/advilm/rewind-frontend' target='_blank' rel='noreferrer' className='px-4'>GitHub</a>
						</div>
					</div>
				</nav>
				{children}
			</div>
		</div>
	);
}