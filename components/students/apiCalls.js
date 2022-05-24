export async function editStudent(id, field, input, setStudents) {
	const res = await fetch('./api/students', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			id: id,
			field: field,
			value: input,
		}),
	})
	const data = await res.json()
	setStudents(data.students)
}

export async function post_student(e, input, reset, setStudents, setInput) {
	e.preventDefault()

	const res = await fetch('./api/students', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			f_name: input.f_name,
			l_name: input.l_name,
			age: input.age,
			grade: input.grade,
		}),
	})
	const data = await res.json()
	setStudents(data.students)
	setInput(reset)
}

export async function deleteStudent(id, setStudents) {
	const res = await fetch('./api/students', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id: id }),
	})
	const data = await res.json()
	setStudents(data.students)
}
