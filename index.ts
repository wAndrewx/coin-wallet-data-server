import http from 'http'
import app from './app'

let httpServer = http.createServer(app)

let server = httpServer.listen(8080, () => {

    console.log("Connected to 8080")
})