import Nav from '../../components/shared/nav'
import pg from '../../db'
import Teachers from '../../components/teachers'

export async function getStaticProps() {
	const teachers = await pg.query('select * from teachers order by id desc')
	const classes = await pg.query('select id, subject from classes')

	return {
		props: {
			teachers: teachers.rows,
			classes: classes.rows,
		},
	}
}

const Teacher = ({ teachers }) => {
	return (
		<>
			<Nav />
			<Teachers teachers={teachers} />
		</>
	)
}

export default Teacher
