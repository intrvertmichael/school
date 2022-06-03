import { useState } from 'react'
import Nav from '../../components/shared/nav'
import pg from '../../db'

import Students from '../../components/students'

export async function getServerSideProps() {
	try {
		const students = await pg.query('select * from students order by id asc')
		const classes = await pg.query('select id, subject from classes')
		return {
			props: {
				students: students.rows,
				classes: classes.rows,
			},
		}
	} catch (error) {
		console.log('ERROR: ', error)
		return { props: {} }
	}
}

export default function Home(props) {
	const [students, setStudents] = useState(props.students ? props.students : [])

	return (
		<>
			<Nav />
			<Students
				students={students}
				setStudents={setStudents}
				classes={props.classes}
			/>
		</>
	)
}
