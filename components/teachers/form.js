import { useState } from 'react'
import { postTeacher } from './apiCalls'

const Form = ({ setTeachers, setShowForm, fields }) => {
	const [input, setInput] = useState({})
	const [error, setError] = useState('')

	const submitForm = e => {
		e.preventDefault()
		postTeacher(e, input, setTeachers, setInput, setError)
	}

	return (
		<>
			<button onClick={() => setShowForm(false)}>X</button>

			{error && (
				<div className='p-3 mb-3 text-center text-white bg-red-600 rounded'>
					<h1>{error.code}</h1>
					<p>{error.message}</p>
					<p>{error.detail}</p>
				</div>
			)}

			<h2 className='mb-3 font-bold text-center'> Add Teacher</h2>

			<form onSubmit={submitForm} className='grid grid-cols-2'>
				{fields.map((field, key) => {
					return (
						<p key={key}>
							<label htmlFor={field} className='block'>
								{field.split('_').join(' ')}
							</label>
							<input
								type={field === 'years_of_experience' ? 'number' : 'text'}
								id={field}
								name={field}
								value={input[field] ? input[field] : ''}
								onChange={e => setInput({ ...input, [field]: e.target.value })}
								className='w-full p-2 border-2'
							/>
						</p>
					)
				})}

				<input
					type='submit'
					className='w-full col-span-4 p-3 mt-3 text-white bg-black'
				/>
			</form>
		</>
	)
}

export default Form
