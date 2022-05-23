import React, { useState } from 'react'
import Form from './form'
import Cell from './cell'

const StudentsTable = ({ students, setStudents }) => {
	const [showForm, setShowForm] = useState(false)

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
							<Cell
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

			<div className='w-full text-sm bg-gray-100 border-2 border-t-0'>
				{showForm ? (
					<Form setStudents={setStudents} setShowForm={setShowForm} />
				) : (
					<button onClick={() => setShowForm(true)}>+ Add Student</button>
				)}
			</div>
		</div>
	)
}

export default StudentsTable
