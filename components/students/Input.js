import { useEffect, useRef, useState } from 'react'
import { editStudent } from './apiCalls'
import InputClass from './InputClass'

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

	const esc_btn = e => {
		if (e.key === 'Escape') {
			setEditing(false)
			setInput(text)
			return
		}
	}

	if (field === 'class')
		return (
			<InputClass
				{...{
					input,
					classes,
					id,
					field,
					setStudents,
					editStudent,
					setEditing,
				}}
			/>
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
						min='0'
						max='50'
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
