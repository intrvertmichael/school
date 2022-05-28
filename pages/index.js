import Nav from '../components/shared/nav'
import pg from '../db'

export async function getStaticProps() {
	const res = await pg.query(
		`
		select classes.id, classes.subject, teachers.last_name teacher, students.first_name first_name, students.last_name last_name from classes
		left join teachers on classes.teacher = teachers.id
		left join students on classes.id = students.class
		`,
	)

	const data = {}

	res.rows.forEach(row => {
		data[row.id] ??= {
			subject: row.subject,
			teacher: row.teacher,
			students: [],
		}

		// if student in class add to obj
		if (row.first_name) {
			data[row.id].students.push(`${row.first_name} ${row.last_name}`)
		}
	})

	return {
		props: {
			data: data,
		},
	}
}

const capitalize = s => {
	if (typeof s !== 'string') return ''
	return s.charAt(0).toUpperCase() + s.slice(1)
}

export default function Home({ data }) {
	return (
		<>
			<Nav />

			<div>
				<h1 className={'text-6xl mb-6 font-bold'}>School</h1>

				<div className='flex flex-col gap-3 md:flex-row'>
					{Object.keys(data).map((id, key) => {
						const classroom = data[id]

						const classes =
							'w-full p-6 border-2 rounded-md relative ' + classroom.subject

						return (
							<div key={key} className={classes}>
								<h1 className='text-3xl font-bold'>
									{capitalize(classroom.subject)}
								</h1>
								<h3>Teacher: {capitalize(classroom.teacher)}</h3>

								<ul className='mt-3'>
									{classroom.students.map((student, key) => (
										<li key={key} className=''>
											- {student}
										</li>
									))}
								</ul>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}
