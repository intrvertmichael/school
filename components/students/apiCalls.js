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

export async function post_student(e, input, setStudents, setInput, setError) {
	e.preventDefault()

	const res = await fetch('./api/students', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			f_name: input.first_name,
			l_name: input.last_name,
			age: input.age,
			grade: input.grade,
			class: input.class,
		}),
	})

	const data = await res.json()

	if (res.status === 200) {
		setStudents(data.students)
		setInput({})
	} else {
		setError(data)
	}
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
