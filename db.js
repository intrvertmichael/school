import { Pool } from 'pg'
const env = process.env.NODE_ENV || 'development'

if (env === 'development') {
	connectionString = {
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		database: process.env.DB_DB,
	}
} else {
	connectionString = {
		connectionString: process.env.DATABASE_URL,
		ssl: true,
	}
}

const pg = new Pool(connectionString)

pg.connect(() => {
	console.log('connected to db')
})

export default pg
