import ClassCard from './classCard'

const ClassCards = ({ classes }) => {
	return (
		<>
			{Object.keys(classes).map((id, key) => (
				<ClassCard key={key} classroom={classes[id]} />
			))}
		</>
	)
}

export default ClassCards
