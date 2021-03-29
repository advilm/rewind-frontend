import React from 'react';
import Nav from './Nav';

export default function Layout({
	children
}) {
	return (
		<div>
			<div className='flex flex-col bg-primary h-screen text-primary-text'>
				<Nav/>
				{children}
			</div>
		</div>
	);
}