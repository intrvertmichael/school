export async function editTeacher(id, field, input, setTeachers) {
	const res = await fetch('./api/teachers', {
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
	setTeachers(data.teachers)
}

export async function postTeacher(e, input, setTeachers, setInput, setError) {
	e.preventDefault()

	const res = await fetch('./api/teachers', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			last_name: input.last_name,
			years_of_experience: input.years_of_experience,
		}),
	})

	const data = await res.json()

	if (res.status === 200) {
		setTeachers(data.teachers)
		setInput({})
	} else {
		setError(data)
	}
}

export async function deleteTeacher(id, setTeachers) {
	const res = await fetch('./api/teachers', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id: id }),
	})
	const data = await res.json()
	setTeachers(data.teachers)
}
