import React from 'react'
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

	const fields = ['first_name', 'last_name', 'age', 'grade']

	return (
		<div className='bg-white rounded'>
			<h3 className='font-bold'>All Students</h3>

			<div className='grid w-full grid-cols-5 text-sm'>
				{fields.map((field, key) => (
					<div key={key} className='bg-gray-100 border-2 border-b-0 border-r-0'>
						{field.split('_').join(' ')}
					</div>
				))}
				<div className='bg-gray-100 border-2 border-b-0'>delete</div>

				{students.map((student, key) => (
					<React.Fragment key={key}>
						{fields.map((field, key) => (
							<AddInput
								key={key}
								id={student.id}
								field={field}
								text={student[field]}
								setStudents={setStudents}
							/>
						))}

						<div className='border-2'>
							<button
								onClick={() => deleteStudent(student.id)}
								className='font-bold text-red-600'
							>
								X
							</button>
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	)
}

export default StudentsTable
