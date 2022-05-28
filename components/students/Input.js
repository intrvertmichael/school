import { useEffect, useRef, useState } from 'react'
import { editStudent } from './apiCalls'

const Input = ({ id, setStudents, field, setEditing, text, classes }) => {
	const [input, setInput] = useState(text)
	const inputReference = useRef(null)

	useEffect(() => {
		if (inputReference.current) {
			inputReference.current.focus()
		}
	}, [])

	async function formSubmitted(e) {
		e.preventDefault()
		await editStudent(id, field, input, setStudents)
		setEditing(false)
	}

	async function classSelected(e) {
		await editStudent(id, field, e.target.value, setStudents)
		setEditing(false)
		setInput(e.target.value)
	}

	const esc_btn = e => {
		if (e.key === 'Escape') {
			setEditing(false)
			setInput(text)
			return
		}
	}

	if (field === 'class')
		return (
			<div className='flex bg-black'>
				<select
					name='classes'
					id='classes'
					value={input}
					onChange={classSelected}
					className='w-full p-2 bg-green-200'
				>
					{classes.map((single, key) => (
						<option key={key} value={single.id}>
							{single.subject}
						</option>
					))}
				</select>
				<button
					onClick={() => setEditing(false)}
					className='px-3 py-2 text-white'
				>
					X
				</button>
			</div>
		)
	if (field === 'age')
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
