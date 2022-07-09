import pg from '../../db/connect'

export default async function handler(req, res) {
	let text = 'select * from students'
	let values = []

	if (req.method === 'POST') {
		text =
			'insert into students (first_name, last_name, age, class) values ($1, $2, $3, $4)'
		values = [req.body.f_name, req.body.l_name, req.body.age, req.body.class]
	} else if (req.method === 'PUT') {
		text = `UPDATE students SET ${req.body.field} = $1 WHERE id = $2`
		values = [req.body.value, req.body.id]
	} else if (req.method === 'DELETE') {
		text = 'delete from students where id=$1'
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

	const updatedStudentsList = await pg.query(
		'select * from students order by id asc',
	)
	res.status(200).json({ students: updatedStudentsList.rows })
}
