import { useState } from 'react'

import Nav from '../components/shared/nav'
import ClassesForm from '../components/classes/Form'
import ClassesFormInfo from '../components/classes/Form_info'
import ClassCards from '../components/classes/ClassCards'

import { getAll } from '../db/queries/_all'
import { getTeachers } from '../db/queries/teachers'

export async function getServerSideProps() {
	try {
		let initialClasses = await getAll()
		let initialTeachers = await getTeachers()

		return {
			props: {
				initialClasses,
				initialTeachers,
			},
		}
	} catch (error) {
		console.log('ERROR: ', error)
		return { props: {} }
	}
}

export default function Home({ initialClasses, initialTeachers }) {
	const [classes, setClasses] = useState(initialClasses)
	const [showForm, setShowForm] = useState(false)

	return (
		<>
			<Nav />

			<div>
				<h1 className={'text-6xl mb-6 font-bold'}>School</h1>

				<div className='grid gap-3 lg:grid-cols-2 xl:grid-cols-3'>
					{initialClasses && <ClassCards classes={classes} />}

					{showForm ? (
						<ClassesForm
							setClasses={setClasses}
							setShowForm={setShowForm}
							teachers={initialTeachers}
						/>
					) : (
						<ClassesFormInfo setShowForm={setShowForm} />
					)}
				</div>
			</div>
		</>
	)
}
