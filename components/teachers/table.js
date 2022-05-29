import React, { useState } from 'react'
import Cell from './cell'
import Form from './form'
import { deleteTeacher } from './apiCalls'

const TeachersTable = ({ teachers, setTeachers }) => {
	const fields = Object.keys(teachers[0]).filter(field => field !== 'id')
	const [showForm, setShowForm] = useState(false)

	return (
		<div className='overflow-hidden rounded'>
			<div className='grid grid-cols-3 text-sm'>
				{fields.map((field, key) => (
					<div
						key={key}
						className='p-2 bg-gray-100 border-2 border-b-0 border-r-0'
					>
						{field.split('_').join(' ')}
					</div>
				))}
				<div className='p-2 bg-gray-100 border-2 border-b-0'>delete</div>

				{teachers.map((teacher, key) => (
					<React.Fragment key={key}>
						{fields.map((field, key) => (
							<Cell
								key={key}
								id={teacher.id}
								field={field}
								text={teacher[field] || '-'}
								setTeachers={setTeachers}
							/>
						))}

						<div className='p-2 border-2 border-b-0'>
							<button
								onClick={() => deleteTeacher(teacher.id, setTeachers)}
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
					<Form {...{ setTeachers, setShowForm, fields }} />
				) : (
					<button onClick={() => setShowForm(true)}>+ Add Teacher</button>
				)}
			</div>
		</div>
	)
}

export default TeachersTable
