import pg from '../../db'

export default async function handler(req, res) {
	let text = 'select * from teachers'
	let values = []

	if (req.method === 'POST') {
		text =
			'insert into teachers (last_name, years_of_experience) values ($1, $2)'
		values = [req.body.last_name, req.body.years_of_experience]
	} else if (req.method === 'PUT') {
		text = `UPDATE teachers SET ${req.body.field} = $1 WHERE id = $2`
		values = [req.body.value, req.body.id]
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

	const updatedTeachersList = await pg.query(
		'select * from teachers order by id desc',
	)
	res.status(200).json({ teachers: updatedTeachersList.rows })
}
