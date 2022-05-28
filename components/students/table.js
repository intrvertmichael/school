import React, { useState } from 'react'
import Form from './form'
import Cell from './cell'
import { deleteStudent } from './apiCalls'

export const fields = ['first_name', 'last_name', 'age', 'grade', 'class']

const StudentsTable = ({ students, setStudents, classes }) => {
	const [showForm, setShowForm] = useState(false)

	return (
		<div className='bg-white rounded'>
			<h3 className='font-bold'>All Students</h3>

			<div className='grid w-full grid-cols-6 text-sm'>
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
								text={student[field] || '-'}
								setStudents={setStudents}
								classes={classes}
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
					<Form {...{ setStudents, setShowForm, classes }} />
				) : (
					<button onClick={() => setShowForm(true)}>+ Add Student</button>
				)}
			</div>
		</div>
	)
}

export default StudentsTable
