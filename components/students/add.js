import { useState } from 'react'

const AddStudent = ({ setStudents }) => {
	const reset = {
		f_name: '',
		l_name: '',
		age: 0,
		grade: 0,
	}
	const [input, setInput] = useState(reset)

	async function post_student(e) {
		e.preventDefault()

		const res = await fetch('./api/students', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				f_name: input.f_name,
				l_name: input.l_name,
				age: input.age,
				grade: input.grade,
			}),
		})
		const data = await res.json()
		setStudents(data.students)
		setInput(reset)
	}

	return (
		<form
			onSubmit={post_student}
			className='flex flex-col p-6 bg-white rounded'
		>
			<h2 className='mb-6 font-bold'> Add Student: </h2>
			<label htmlFor='f_name'>First Name:</label>
			<input
				type='text'
				id='f_name'
				name='f_name'
				value={input.f_name}
				onChange={e => setInput({ ...input, f_name: e.target.value })}
				className='p-3 border-2'
			/>

			<label htmlFor='l_name'>Last Name:</label>
			<input
				type='text'
				id='l_name'
				name='l_name'
				value={input.l_name}
				onChange={e => setInput({ ...input, l_name: e.target.value })}
				className='p-3 border-2'
			/>

			<label htmlFor='age'>Age:</label>
			<input
				type='number'
				id='age'
				name='age'
				value={input.age}
				onChange={e => setInput({ ...input, age: e.target.value })}
				className='p-3 border-2'
			/>

			<label htmlFor='grade'>Grade:</label>
			<input
				type='number'
				id='grade'
				name='grade'
				value={input.grade}
				onChange={e => setInput({ ...input, grade: e.target.value })}
				className='p-3 border-2'
			/>

			<input type='submit' className='p-3 bg-yellow-200 border-2' />
		</form>
	)
}

export default AddStudent
