import { useState } from 'react'
import { post_student } from './apiCalls'

const Form = ({ setStudents, setShowForm }) => {
	const reset = {
		f_name: '',
		l_name: '',
		age: 0,
		grade: 0,
	}
	const [input, setInput] = useState(reset)

	return (
		<>
			<button onClick={() => setShowForm(false)}>X</button>

			<h2 className='mb-3 font-bold text-center'> Add Student</h2>

			<form
				onSubmit={e => {
					e.preventDefault()
					post_student(e, input, reset, setStudents, setInput)
				}}
				className='grid grid-cols-4'
			>
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
						className='w-full p-2 border-2'
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
						className='w-full p-2 border-2'
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
						className='w-full p-2 border-2'
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
						className='w-full p-2 border-2'
					/>
				</p>

				<p className='flex flex-row col-span-4 mt-3'>
					<button
						onClick={e => {
							e.preventDefault()
							setInput(reset)
						}}
						className='w-full p-3 bg-gray-200'
					>
						Reset
					</button>
					<input type='submit' className='w-full p-3 text-white bg-black' />
				</p>
			</form>
		</>
	)
}

export default Form
