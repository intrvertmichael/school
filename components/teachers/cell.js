import { useState } from 'react'
import Input from './input'

const Cell = ({ id, field, text, setTeachers }) => {
	const [editing, setEditing] = useState(false)

	return (
		<div className='border-t-2 border-l-2'>
			{editing ? (
				<Input
					{...{
						id,
						field,
						setEditing,
						setTeachers,
						text,
					}}
				/>
			) : (
				<div className='p-2' onClick={() => setEditing(true)}>
					{text}
				</div>
			)}
		</div>
	)
}

export default Cell
