import express from 'express'
import dbConfig from './config/db'
import middlewareConfig from './config/middleware'
import { MeetupRoutes } from './modules'

const app = express()

// Database
dbConfig()

// Middleware
middlewareConfig(app)

app.use('/api', [ MeetupRoutes ])

const PORT = process.env.PORT || 3000

app.listen(PORT, err => {
   if (err) {
      console.error(err)
   } else {
      console.log(`Applisten to port: ${PORT}`)
   }
})