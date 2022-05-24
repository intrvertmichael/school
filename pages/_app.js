import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<div className='p-1 sm:p-5 md:p-10 lg:p-20'>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
