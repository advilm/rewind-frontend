import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import { useDispatch } from 'react-redux';

import Layout from '../components/Layout';

export default function Callback({ query }) {
	const [status, setStatus] = useState(0);
	// const dispatch = useDispatch();
	const router = useRouter();

	useEffect(async () => {
		try { 
			router.push('/app');
			
			const data = auth(query);
			console.log(await data);
		} 
		catch (e) { setStatus('error'); console.error(e); }
	}, []);

	return (
		<Layout>
			{status !== 0 ? <p className='flex justify-center text-5xl pt-24'>An error has occured</p> : ''}
		</Layout>
	);
}

export function getServerSideProps(ctx) {
	return { props: { query: ctx.query } };
}

async function auth(query) {
	if (!query.code) throw 'No code';
	const res = await (await fetch('https://api.advil.cf/auth', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ code: query.code })
	})).json();

	return res;
}