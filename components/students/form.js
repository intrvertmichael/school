import { useState } from 'react'

const Form = ({ setStudents, setShowForm }) => {
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
		<>
			<button onClick={() => setShowForm(false)}>X</button>

			<h2 className='mb-6 font-bold text-center'> Add Student</h2>

			<form onSubmit={post_student} className='grid grid-cols-4 p-2 pt-0'>
				<p>
					<label htmlFor='f_name' className='block'>
						First Name:
					</label>
					<input
						type='text'
						id='f_name'
						name='f_name'
						value={input.f_name}
						onChange={e => setInput({ ...input, f_name: e.target.value })}
						className='w-full border-2'
					/>
				</p>

				<p>
					<label htmlFor='l_name' className='block'>
						Last Name:
					</label>
					<input
						type='text'
						id='l_name'
						name='l_name'
						value={input.l_name}
						onChange={e => setInput({ ...input, l_name: e.target.value })}
						className='w-full border-2'
					/>
				</p>

				<p>
					<label htmlFor='age' className='block'>
						Age:
					</label>
					<input
						type='number'
						id='age'
						name='age'
						value={input.age}
						onChange={e => setInput({ ...input, age: e.target.value })}
						className='w-full border-2'
					/>
				</p>

				<p>
					<label htmlFor='grade' className='block'>
						Grade:
					</label>
					<input
						type='number'
						id='grade'
						name='grade'
						value={input.grade}
						onChange={e => setInput({ ...input, grade: e.target.value })}
						className='w-full border-2'
					/>
				</p>

				<input
					type='submit'
					className='col-span-4 py-3 mt-3 text-white bg-black rounded'
				/>
			</form>
		</>
	)
}

export default Form
