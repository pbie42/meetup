import bodyParser from 'body-parser'
import morgan from 'morgan'

export default app => {
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: false }))
	// Morgan will log all of the server requests
	app.use(morgan('dev'))
}