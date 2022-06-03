import { Pool } from 'pg'
const env = process.env.NODE_ENV || 'development'

let credentials

if (env === 'development') {
	credentials = {
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		database: process.env.DB_DB,
	}
} else {
	credentials = process.env.DATABASE_URL
}

const pg = new Pool(credentials)

pg.connect(() => {
	console.log('connected to db')
})

export default pg
