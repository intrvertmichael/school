import { useState } from 'react'
import Input from './Input'

const Cell = ({ id, field, text, setStudents, classes }) => {
	const [editing, setEditing] = useState(false)

	const subject = classes.find(single => single.id === text)

	return (
		<div className='border-t-2 border-l-2'>
			{editing ? (
				<Input
					{...{
						id,
						field,
						setEditing,
						setStudents,
						text,
						classes,
					}}
				/>
			) : (
				<div className='p-2' onClick={() => setEditing(true)}>
					{field === 'class' ? subject && subject.subject : text}
				</div>
			)}
		</div>
	)
}

export default Cell
