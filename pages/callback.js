import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

export default function Callback({ query }) {
	const [status, setStatus] = useState(0);

	useEffect(() => authenticate(query, setStatus), []);

	return (
		<Layout>
			<p className='flex justify-center text-5xl pt-24'>{status === 0 ? '...' : status === 'error' ? 'An error occured with Discord authentification' : 'Hello ' + status.username}</p>
		</Layout>
	);
}

export function getServerSideProps(ctx) {
	return { props: { query: ctx.query } };
}

async function authenticate(query, setStatus) {
	if (!query.code) setStatus('error');
	const res = await fetch('http://localhost:3001/authenticate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ code: query.code })
	});
	const json = await res.json();
	setStatus(json);
}