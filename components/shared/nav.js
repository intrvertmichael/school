import Link from 'next/link'

const Nav = () => {
	return (
		<div className='flex gap-6 mb-6'>
			<Link href='/'>Home</Link>
			<Link href='/students'>Students</Link>
			<Link href='/teachers'>Teachers</Link>
		</div>
	)
}

export default Nav
