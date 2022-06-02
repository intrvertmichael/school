import { useState } from 'react'
import Nav from '../../components/shared/nav'
import pg from '../../db'
import Teachers from '../../components/teachers'

export async function getServerSideProps() {
	try {
		const teachers = await pg.query('select * from teachers order by id asc')
		const classes = await pg.query('select id, subject from classes')

		return {
			props: {
				teachers: teachers.rows,
				classes: classes.rows,
			},
		}
	} catch {
		return { props: {} }
	}
}

const Teacher = props => {
	const [teachers, setTeachers] = useState(props.teachers ? props.teachers : [])

	return (
		<>
			<Nav />

			<Teachers teachers={teachers} setTeachers={setTeachers} />
		</>
	)
}

export default Teacher
