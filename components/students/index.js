import StudentsTable from './table'

const Students = ({ students, setStudents, classes }) => {
	return (
		<div className=''>
			<h2 className='w-full mb-6 text-6xl font-bold '>Students</h2>

			<StudentsTable
				students={students}
				setStudents={setStudents}
				classes={classes}
			/>
		</div>
	)
}

export default Students
