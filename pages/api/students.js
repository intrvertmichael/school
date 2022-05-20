import pg from '../../db'

export default async function handler(req, res) {
	console.log('req.method = ', req.method)
	console.log('req.body = ', req.body)

	// -> GET
	let text = 'select * from students'
	let values = []

	if (req.method === 'POST') {
		text = 'insert into students (first_name, last_name, age, grade) values ($1, $2, $3, $4)'
		values = [req.body.f_name, req.body.l_name, req.body.age, req.body.grade]
	}
	else if (req.method === 'PUT') {
		text = `UPDATE students SET ${req.body.field} = $1 WHERE id = $2`
		values = [req.body.value, req.body.id]
	}
	else if (req.method === 'DELETE') {
		text = 'delete from students where id=$1'
		values = [req.body.id]
	} else {
		
	}
	
	await pg.query( text, values)

	const updatedStudentsList = await pg.query('select * from students')
	res.status(200).json({ students: updatedStudentsList.rows })
}
