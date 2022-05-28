import { useState } from 'react'
import { post_student } from './apiCalls'
import InputClass from './InputClass'
import { fields } from './table'

const Form = ({ setStudents, setShowForm, classes }) => {
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
					<h1>{error.code}</h1>
					<p>{error.message}</p>
					<p>{error.detail}</p>
				</div>
			)}

			<h2 className='mb-3 font-bold text-center'> Add Student</h2>

			<form onSubmit={submitForm} className='grid grid-cols-4'>
				{fields.map((field, key) => {
					console.log('field', field)
					if (field === 'class')
						return (
							<InputClass
								{...{
									key: { key },
									input,
									setInput,
									classes,
									field,
									setStudents,
								}}
							/>
						)
					else
						return (
							<p key={key}>
								<label htmlFor={field} className='block'>
									{field.split('_').join(' ')}
								</label>
								<input
									type={
										field === 'age' || field === 'class' ? 'number' : 'text'
									}
									id={field}
									name={field}
									value={input[field] ? input[field] : ''}
									onChange={e =>
										setInput({ ...input, [field]: e.target.value })
									}
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
