const StudentsTable = ({ students, setStudents }) => {
	async function deleteStudent(id) {
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

	console.log(students)

	return (
		<div className='p-6 bg-white rounded'>
			<h3 className='font-bold'>All Students</h3>
			<table className='w-full'>
				<thead>
					<tr className='text-white bg-gray-500'>
						<th>first name</th>
						<th>last name</th>
						<th>age</th>
						<th>grade</th>
						<th>delete</th>
					</tr>
				</thead>

				<tbody>
					{students.map(student => (
						<tr key={student.id} className=''>
							<th>{student.first_name}</th>
							<th>{student.last_name}</th>
							<th>{student.age}</th>
							<th>{student.grade}</th>
							<th>
								<button
									onClick={() => deleteStudent(student.id)}
									className='font-bold text-red-600'
								>
									X
								</button>
							</th>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default StudentsTable
