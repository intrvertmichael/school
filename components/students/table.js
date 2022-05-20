import AddInput from './add_input'

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
			<div className='grid w-full grid-cols-5 text-sm'>
				<div className='bg-gray-100 border-2 border-b-0 border-r-0'>
					first name
				</div>
				<div className='bg-gray-100 border-2 border-b-0 border-r-0'>
					last name
				</div>
				<div className='bg-gray-100 border-2 border-b-0 border-r-0'>age</div>
				<div className='bg-gray-100 border-2 border-b-0 border-r-0'>grade</div>
				<div className='bg-gray-100 border-2 border-b-0'>delete</div>

				{students.map(student => (
					<>
						<AddInput
							id={student.id}
							field='first_name'
							text={student.first_name}
							setStudents={setStudents}
						/>

						<AddInput
							id={student.id}
							field='last_name'
							text={student.last_name}
							setStudents={setStudents}
						/>

						<AddInput
							id={student.id}
							field='age'
							text={student.age}
							setStudents={setStudents}
						/>

						<AddInput
							id={student.id}
							field='grade'
							text={student.grade}
							setStudents={setStudents}
						/>

						<div className='border-2'>
							<button
								onClick={() => deleteStudent(student.id)}
								className='font-bold text-red-600'
							>
								X
							</button>
						</div>
					</>
				))}
			</div>
		</div>
	)
}

export default StudentsTable
