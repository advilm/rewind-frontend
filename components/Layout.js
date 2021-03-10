import React from 'react';
import Head from 'next/head';
import Nav from './Nav';

export default function Layout({
	children,
	title = 'Rewind'
}) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<div className='flex flex-col bg-primary h-screen text-primary-text'>
				<Nav />
				{children}
			</div>
		</div>
	);
}