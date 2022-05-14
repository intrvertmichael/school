import AddStudent from './add'
import StudentsTable from './table'

const Students = ({ students, setStudents }) => {
	return (
		<div className='flex flex-col gap-2 p-2 rounded bg-slate-800'>
			<h2 className='w-full p-6 text-3xl font-bold text-center text-white'>
				Students
			</h2>

			<StudentsTable students={students} setStudents={setStudents} />

			<AddStudent setStudents={setStudents} />
		</div>
	)
}

export default Students
