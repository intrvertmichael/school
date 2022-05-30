import pg from '../../db'

export default async function handler(req, res) {
	let text = 'select * from classes'
	let values = []

	if (req.method === 'POST') {
		text = 'insert into classes (subject, teacher) values ($1, $2)'
		values = [req.body.subject, req.body.teacher]
	} else if (req.method === 'PUT') {
		// text = `UPDATE teachers SET ${req.body.field} = $1 WHERE id = $2`
		// values = [req.body.value, req.body.id]
	} else if (req.method === 'DELETE') {
		text = 'delete from teachers where id=$1'
		values = [req.body.id]
	}

	try {
		await pg.query(text, values)
	} catch (error) {
		res.status(500).json({
			code: error.code,
			message: error.message,
			detail: error.detail,
		})
	}

	const newRes = await pg.query(
		`
		select classes.id, classes.subject, teachers.last_name teacher, students.first_name first_name, students.last_name last_name from classes
		left join teachers on classes.teacher = teachers.id
		left join students on classes.id = students.class
		`,
	)
	res.status(200).json({ classes: newRes.rows })
}
