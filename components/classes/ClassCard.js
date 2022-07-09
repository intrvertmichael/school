const ClassCard = ({ classroom }) => {
	const capitalize = s => {
		if (typeof s !== 'string') return ''
		return s.charAt(0).toUpperCase() + s.slice(1)
	}

	return (
		<div
			className={'w-full p-6 border-2 rounded-md relative ' + classroom.subject}
		>
			<div className='absolute text-6xl top-3 right-3'>{classroom.icon}</div>

			<h1 className='text-3xl font-bold'>{capitalize(classroom.subject)}</h1>
			<h3>Teacher: {capitalize(classroom.teacher)}</h3>
			<ul className='mt-3'>{<StudentList students={classroom.students} />}</ul>
		</div>
	)
}

const StudentList = ({ students }) => {
	return (
		<>
			{students?.map((student, key) => (
				<li key={key} className=''>
					- {student}
				</li>
			))}
		</>
	)
}

export default ClassCard
