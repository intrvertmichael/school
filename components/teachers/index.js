import TeachersTable from './table'

const Teachers = ({ teachers }) => {
	return (
		<div>
			<h2 className='w-full mb-6 text-6xl font-bold '> Teachers </h2>

			<TeachersTable {...{ teachers }} />
		</div>
	)
}

export default Teachers
