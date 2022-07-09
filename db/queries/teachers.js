import pg from '../connect'

export async function getTeachers() {
	const teachers = await pg.query('select * from teachers order by id asc')
	return teachers.rows
}
