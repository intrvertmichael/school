import React, { useState } from 'react'
import Form from './form'
import Cell from './cell'
import { deleteStudent } from './apiCalls'

const StudentsTable = ({ students, setStudents, classes }) => {
	const fields = Object.keys(students[0]).filter(field => field !== 'id')
	const [showForm, setShowForm] = useState(false)

	const wrapperStyles = `grid w-full grid-cols-${fields.length + 1} text-sm`
	return (
		<div className='overflow-hidden rounded'>
			<div className={wrapperStyles}>
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
					<Form {...{ setStudents, setShowForm, classes, fields }} />
				) : (
					<button onClick={() => setShowForm(true)}>+ Add Student</button>
				)}
			</div>
		</div>
	)
}

export default StudentsTable
