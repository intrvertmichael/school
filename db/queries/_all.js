import pg from '../connect'

export async function getAll() {
	const res = await pg.query(
		`
        select classes.id, classes.subject, classes.icon, teachers.last_name teacher, students.first_name first_name, students.last_name last_name from classes
        left join teachers on classes.teacher = teachers.id
        left join students on classes.id = students.class
        `,
	)

	let classes = res.rows?.reduce((total, row) => {
		total[row.id] ??= {
			subject: row.subject,
			teacher: row.teacher,
			icon: row.icon,
			students: [],
		}

		// if student in class add to obj
		if (row.first_name) {
			total[row.id].students.push(`${row.first_name} ${row.last_name}`)
		}

		return total
	}, {})

	return classes
}
