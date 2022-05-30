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

export async function postClass(e, input, setClasses, setInput, setError) {
	e.preventDefault()

	const res = await fetch('./api/classes', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			subject: input.subject,
			teacher: input.teacher,
		}),
	})

	const data = await res.json()

	if (res.status === 200) {
		setClasses(data.classes)
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
