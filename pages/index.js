import React from 'react';
import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';

// const url = 'https://discord.com/api/oauth2/authorize?client_id=639617043502727209&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=identify%20guilds';
const url = 'https://discord.com/api/oauth2/authorize?client_id=639617043502727209&redirect_uri=https%3A%2F%2Frewind.advil.cf%2Fcallback&response_type=code&scope=identify%20guilds';

export default function Home() {
	return (
		<Layout>
			<div className='flex flex-col items-center text-center pt-24'>
				<h1 className='text-5xl'>Press the button</h1>
				<a href={url}>
					<button className='duration-200 p-2 mt-4 rounded-md text-xl bg-secondary text-primary hover:bg-secondary-dark'>
						Login with Discord
					</button>
				</a>
			</div>
		</Layout>
	);
}
