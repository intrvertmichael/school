import { useEffect, useRef, useState } from 'react'
import { editTeacher } from './apiCalls'

const Input = ({ id, field, setEditing, setTeachers, text }) => {
	const [input, setInput] = useState(text)
	const inputReference = useRef(null)

	useEffect(() => {
		if (inputReference.current) {
			inputReference.current.focus()
		}
	}, [])

	async function formSubmitted(e) {
		e.preventDefault()
		await editTeacher(id, field, input, setTeachers)
		setEditing(false)
	}

	const esc_btn = e => {
		if (e.key === 'Escape') {
			setEditing(false)
			setInput(text)
			return
		}
	}

	if (field === 'years_of_experience')
		return (
			<div className='flex bg-black'>
				<form onSubmit={formSubmitted} className='w-full border-0'>
					<input
						type={'number'}
						onKeyDown={esc_btn}
						value={input}
						onChange={e => setInput(e.target.value)}
						ref={inputReference}
						className='block w-full p-2 bg-green-100'
						min='0'
						max='100'
					/>
				</form>
				<button
					onClick={() => setEditing(false)}
					className='px-3 py-2 text-white'
				>
					X
				</button>
			</div>
		)
	else
		return (
			<div className='flex bg-black'>
				<form onSubmit={formSubmitted} className='w-full border-0'>
					<input
						type={'text'}
						onKeyDown={esc_btn}
						value={input}
						onChange={e => setInput(e.target.value)}
						ref={inputReference}
						className='block w-full p-2 bg-green-100'
						minLength='2'
						maxLength='15'
					/>
				</form>
				<button
					onClick={() => setEditing(false)}
					className='px-3 py-2 text-white'
				>
					X
				</button>
			</div>
		)
}

export default Input
