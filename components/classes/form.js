import { useState } from 'react'
import { postClass } from './apiCalls'

const ClassesForm = ({ setClasses, setShowForm, teachers }) => {
	const [input, setInput] = useState({ subject: '', teacher: '0', icon: '' })

	const [error, setError] = useState('')

	function formSubmitted(e) {
		e.preventDefault()
		postClass(e, input, setClasses, setInput, setError)
		setShowForm(false)
	}

	return (
		<div className='relative w-full p-6 border-2 rounded-md bg-gray-50'>
			<button
				onClick={() => setShowForm(false)}
				className='absolute top-3 right-6'
			>
				X
			</button>

			{error && <div>{error}</div>}

			<form onSubmit={formSubmitted}>
				<input
					type='text'
					id='subject'
					name='subject'
					placeholder='Class Subject'
					value={input.subject}
					onChange={e => setInput({ ...input, subject: e.target.value })}
					minLength='0'
					maxLength='20'
					className='p-1 border-2'
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
					placeholder='Icon'
					value={input.icon}
					onChange={e => setInput({ ...input, icon: e.target.value })}
					minLength='0'
					maxLength='1'
					className='p-1 border-2'
				/>
				<input type='submit' />
			</form>
		</div>
	)
}

export default ClassesForm
