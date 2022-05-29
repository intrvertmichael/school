import TeachersTable from './table'

const Teachers = ({ teachers, setTeachers }) => {
	return (
		<div>
			<h2 className='w-full mb-6 text-6xl font-bold '> Teachers </h2>

			<TeachersTable {...{ teachers, setTeachers }} />
		</div>
	)
}

export default Teachers
