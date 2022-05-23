import AddStudent from './add'
import StudentsTable from './table'

const Students = ({ students, setStudents }) => {
	return (
		<div className='flex flex-col gap-2'>
			<h2 className='w-full text-3xl font-bold text-center'>Students</h2>

			<StudentsTable students={students} setStudents={setStudents} />
			<AddStudent setStudents={setStudents} />
		</div>
	)
}

export default Students
