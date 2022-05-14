import pg from '../../db'

export default async function handler(req, res) {
	console.log('req.method = ', req.method)
	console.log('req.body = ', req.body)

	if (req.method === 'POST') {
		await pg.query(
			'insert into students (first_name, last_name, age, grade) values ($1, $2, $3, $4)',
			[req.body.f_name, req.body.l_name, req.body.age, req.body.grade],
		)
	}
	if (req.method === 'DELETE') {
		await pg.query('delete from students where id=$1', [req.body.id])
	} else {
		// Handle any other HTTP method
	}

	const updatedStudentsList = await pg.query('select * from students')
	res.status(200).json({ students: updatedStudentsList.rows })
}
