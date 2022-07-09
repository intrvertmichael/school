const ClassesFormInfo = ({ setShowForm }) => {
	return (
		<div
			className='relative w-full p-6 border-2 rounded-md cursor-pointer bg-gray-50 add-class hover:border-slate-400'
			onClick={() => setShowForm(true)}
		>
			<h1 className='mb-3 text-3xl font-bold'>Add a class</h1>
			<p className='w-3/4 text-sm'>
				Add a class to the school. Here you will be able to choose your own
				subject and assign it to one of the existing teachers.
			</p>
		</div>
	)
}

export default ClassesFormInfo
