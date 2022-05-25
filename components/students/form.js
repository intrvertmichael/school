import { useState } from 'react'
import { post_student } from './apiCalls'
import { fields } from './table'

const Form = ({ setStudents, setShowForm }) => {
	const [input, setInput] = useState({})

	return (
		<>
			<button onClick={() => setShowForm(false)}>X</button>

			<h2 className='mb-3 font-bold text-center'> Add Student</h2>

			<form
				onSubmit={e => {
					e.preventDefault()
					post_student(e, input, reset, setStudents, setInput)
				}}
				className='grid grid-cols-5'
			>
				{fields.map((field, key) => (
					<p key={key}>
						<label htmlFor={field} className='block'>
							{field.split('_').join(' ')}
						</label>
						<input
							type={
								field === 'grade' || field === 'age' || field === 'class'
									? 'number'
									: 'text'
							}
							id={field}
							name={field}
							value={input[field] ? input[field] : ''}
							onChange={e => setInput({ ...input, [field]: e.target.value })}
							className='w-full p-2 border-2'
						/>
					</p>
				))}

				<p className='flex flex-row col-span-5 mt-3'>
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
