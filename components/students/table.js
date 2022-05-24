import React, { useState } from 'react'
import Form from './form'
import Cell from './cell'
import { deleteStudent } from './apiCalls'

const StudentsTable = ({ students, setStudents }) => {
	const [showForm, setShowForm] = useState(false)

	const fields = ['first_name', 'last_name', 'age', 'grade']

	return (
		<div className='bg-white rounded'>
			<h3 className='font-bold'>All Students</h3>

			<div className='grid w-full grid-cols-5 text-sm'>
				{fields.map((field, key) => (
					<div
						key={key}
						className='p-2 bg-gray-100 border-2 border-b-0 border-r-0'
					>
						{field.split('_').join(' ')}
					</div>
				))}
				<div className='p-2 bg-gray-100 border-2 border-b-0'>delete</div>

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

						<div className='p-2 border-2 border-b-0'>
							<button
								onClick={() => deleteStudent(student.id, setStudents)}
								className='font-bold text-red-600'
							>
								X
							</button>
						</div>
					</React.Fragment>
				))}
			</div>

			<div className='w-full p-2 text-sm bg-gray-100 border-2'>
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
