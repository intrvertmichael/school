import { useState } from 'react'
import { post_student } from './apiCalls'
import { fields } from './table'

const Form = ({ setStudents, setShowForm }) => {
	const [input, setInput] = useState({})
	const [error, setError] = useState('')

	const submitForm = e => {
		e.preventDefault()
		post_student(e, input, setStudents, setInput, setError)
	}

	return (
		<>
			<button onClick={() => setShowForm(false)}>X</button>

			{error && (
				<div className='p-3 mb-3 text-center text-white bg-red-600 rounded'>
					<p>{error.message}</p>
					<p>{error.detail}</p>
				</div>
			)}

			<h2 className='mb-3 font-bold text-center'> Add Student</h2>

			<form onSubmit={submitForm} className='grid grid-cols-5'>
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

				<input
					type='submit'
					className='w-full col-span-5 p-3 mt-3 text-white bg-black'
				/>
			</form>
		</>
	)
}

export default Form
