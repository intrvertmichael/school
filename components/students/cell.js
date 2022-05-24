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

	if (editing) {
		return (
			<div className='flex bg-gray-100 border-2 border-b-0 border-r-0'>
				<form onSubmit={formSubmitted} className='block w-full'>
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
						className='block w-full bg-green-100'
					/>
				</form>
				<button
					onClick={() => setEditing(false)}
					className='px-2 text-white bg-black'
				>
					X
				</button>
			</div>
		)
	}

	return (
		<div
			className='border-2 border-b-0 border-r-0'
			onClick={() => setEditing(true)}
		>
			{text}
		</div>
	)
}

export default Cell
