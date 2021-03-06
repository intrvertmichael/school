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

	return (
		<div className={`flex ${id ? 'bg-black' : 'flex-col'}`}>
			{!id && <label value={0}>class</label>}
			<select
				name='classes'
				id='classes'
				// defaultValue={id ? input : '0'}
				value={id ? input : input.class}
				onChange={classSelected}
				className={`w-full p-2 ${id ? 'bg-green-200' : 'border-2'}`}
			>
				<option disabled value='0'>
					Choose a Class:
				</option>

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
