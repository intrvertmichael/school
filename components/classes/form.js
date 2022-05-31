import { useState } from 'react'
import { postClass } from './apiCalls'

const ClassesForm = ({ setClasses, setShowForm, teachers }) => {
	const [input, setInput] = useState({ subject: '', teacher: '0', icon: '' })

	const [error, setError] = useState('')

	function formSubmitted(e) {
		e.preventDefault()
		postClass(e, input, setClasses, setInput, setError, setShowForm)
	}

	return (
		<div className='relative w-full border-2 rounded-md bg-gray-50 hover:border-slate-400'>
			<button
				onClick={() => setShowForm(false)}
				className='absolute top-2 right-3'
			>
				X
			</button>

			{error && (
				<div className='px-8 py-3 text-sm text-white bg-red-600'>
					<h1>{error.code}</h1>
					<p>{error.message}</p>
					<p>{error.detail}</p>
				</div>
			)}

			<form
				onSubmit={formSubmitted}
				className='flex flex-col w-3/4 mx-auto my-3'
			>
				<input
					type='text'
					id='subject'
					name='subject'
					placeholder='Class Subject'
					value={input.subject}
					onChange={e => setInput({ ...input, subject: e.target.value })}
					minLength='0'
					maxLength='20'
					className='px-3 py-2 border-2'
				/>

				<select
					name='teachers'
					id='teachers'
					value={input.teacher}
					onChange={e => setInput({ ...input, teacher: e.target.value })}
					className='p-1 border-2'
				>
					<option value='0' disabled>
						Choose a Teacher:
					</option>

					{teachers.map((single, key) => (
						<option key={key} value={single.id}>
							{single.last_name}
						</option>
					))}
				</select>

				<input
					type='text'
					id='icon'
					name='icon'
					placeholder='Emoji Icon'
					value={input.icon}
					onChange={e => setInput({ ...input, icon: e.target.value })}
					minLength='0'
					maxLength='1'
					className='px-3 py-2 border-2'
				/>
				<input
					type='submit'
					className='block px-3 py-1 mt-3 text-white rounded bg-slate-600'
				/>
			</form>
		</div>
	)
}

export default ClassesForm
