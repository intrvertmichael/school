import AddStudent from './add'

const Students = ({ students, setStudents }) => {
	return (
		<div>
			<h2 className='font-bold'>All Students</h2>
			<table className='w-full'>
				<thead>
					<tr className='text-white bg-gray-500'>
						<th>name</th>
						<th>age</th>
						<th>grade</th>
					</tr>
				</thead>

				<tbody>
					{students.map(student => (
						<tr key={student.id} className=''>
							<th>{student.name}</th>
							<th>{student.age}</th>
							<th>{student.grade}</th>
						</tr>
					))}
				</tbody>
			</table>

			<AddStudent setStudents={setStudents} />
		</div>
	)
}

export default Students
