import pg from '../../db'

export default async function handler(req, res) {
	console.log('req.method = ', req.method)
	// console.log('req.body = ', req.body)

	if (req.method === 'POST') {
		await pg.query(
			'insert into students (first_name, last_name, age, grade) values ($1, $2, $3, $4)',
			[req.body.f_name, req.body.l_name, req.body.age, req.body.grade],
		)

		const students = await pg.query(
			"select id, first_name || ' ' || last_name name, age, grade from students",
		)

		res.status(200).json({ students: students.rows })
	} else {
		// Handle any other HTTP method
	}
}
