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
				<meta charSet='utf-8'/>
				<meta name='viewport' content='initial-scale=1.0, width=device-width'/>

				<meta name="title" content="Rewind"/>
				<meta name="description" content="Music bot with support for playlists and web dashboard for managing queue."/>

				<meta property="og:type" content="website"/>
				<meta property="og:url" content="https://rewind.advil.cf/"/>
				<meta property="og:title" content="Rewind"/>
				<meta property="og:description" content="Music bot with support for playlists and web dashboard for managing queue."/>
			</Head>
			<div className='flex flex-col bg-primary h-screen text-primary-text'>
				<Nav />
				{children}
			</div>
		</div>
	);
}