import http from 'http'
import app from './app'
import 'dotenv/config'

let httpServer = http.createServer(app)

let server = httpServer.listen(8080, () => {

    console.log("Connected to 8080")
})