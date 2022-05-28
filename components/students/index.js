import StudentsTable from './table'

const Students = ({ students, setStudents, classes }) => {
	return (
		<div className='flex flex-col gap-2'>
			<h2 className='w-full text-3xl font-bold text-center'>Students</h2>

			<StudentsTable
				students={students}
				setStudents={setStudents}
				classes={classes}
			/>
		</div>
	)
}

export default Students
