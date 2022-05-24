import { useEffect, useState, useRef } from 'react'
import { editStudent } from './apiCalls'

const Cell = ({ id, field, text, setStudents }) => {
	const [input, setInput] = useState(text)
	const [editing, setEditing] = useState(false)
	const inputReference = useRef(null)

	useEffect(() => {
		if (inputReference.current) {
			inputReference.current.focus()
		}
	}, [editing])

	async function formSubmitted(e) {
		e.preventDefault()
		await editStudent(id, field, input, setStudents)
		setEditing(false)
	}

	return (
		<div className='border-2 border-b-0 border-r-0'>
			{editing ? (
				<Input
					{...{
						formSubmitted,
						field,
						input,
						setEditing,
						setInput,
						text,
						inputReference,
					}}
				/>
			) : (
				<Text {...{ text, setEditing }} />
			)}
		</div>
	)
}

const Text = ({ text, setEditing }) => {
	return (
		<div className='p-2' onClick={() => setEditing(true)}>
			{text}
		</div>
	)
}

const Input = ({
	formSubmitted,
	field,
	input,
	setEditing,
	setInput,
	text,
	inputReference,
}) => {
	return (
		<div className='flex bg-black'>
			<form onSubmit={formSubmitted} className='w-full border-0'>
				<input
					type={field === 'grade' || field === 'age' ? 'number' : 'text'}
					value={input}
					onKeyDown={e => {
						if (e.key === 'Escape') {
							setEditing(false)
							setInput(text)
							return
						}
					}}
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

export default Cell
