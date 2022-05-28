const InputClass = ({
	input,
	setInput,
	classes,
	id,
	field,
	setStudents,
	editStudent,
	setEditing,
}) => {
	async function classSelected(e) {
		if (id) {
			await editStudent(id, field, e.target.value, setStudents)
			await setEditing(false)
		} else {
			setInput({ ...input, class: e.target.value })
		}
	}

	const wrapperStyle = `flex ${id ? 'bg-black' : 'flex-col'}`
	const inputStyle = `w-full p-2 ${id ? 'bg-green-200' : 'border-2'}`

	return (
		<div className={wrapperStyle}>
			{!id && <label value={0}>class</label>}
			<select
				name='classes'
				id='classes'
				value={id ? input : input.class}
				onChange={classSelected}
				className={inputStyle}
			>
				<option disabled>Choose a Class:</option>

				{classes.map((single, key) => (
					<option key={key} value={single.id}>
						{single.subject}
					</option>
				))}
			</select>
			{id && (
				<button
					onClick={() => setEditing(false)}
					className='px-3 py-2 text-white'
				>
					X
				</button>
			)}
		</div>
	)
}

export default InputClass
