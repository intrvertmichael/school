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
			<table className='w-full text-sm'>
				<thead>
					<tr className='p-3 text-bold'>
						<th className="border-2 ">first name</th>
						<th className="border-2 ">last name</th>
						<th className="border-2 ">age</th>
						<th className="border-2 ">grade</th>
						<th className="border-2 ">delete</th>
					</tr>
				</thead>

				<tbody>
					{students.map(student => (
						<tr key={student.id} className=''>
							<th className="border-2 ">{student.first_name}</th>
							<th className="border-2 ">{student.last_name}</th>
							<th className="border-2 ">{student.age}</th>
							<th className="border-2 ">{student.grade}</th>
							<th className="border-2 ">
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
