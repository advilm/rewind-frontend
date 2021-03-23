import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
  
	render() {
		return (
			<Html lang='en'>
				<Head>
					<title>Rewind</title>
					<meta charSet='utf-8'/>
					<meta name='viewport' content='initial-scale=1.0, width=device-width'/>

					<meta name="title" content="Rewind"/>
					<meta name="description" content="Discord music bot with support for playlists and web dashboard for managing queue."/>

					<meta property="og:type" content="website"/>
					<meta property="og:url" content="https://rewind.advil.cf/"/>
					<meta property="og:title" content="Rewind"/>
					<meta property="og:description" content="Discord music bot with support for playlists and web dashboard for managing queue."/>
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}
  
export default MyDocument;