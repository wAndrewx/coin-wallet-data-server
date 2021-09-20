import express from "express"
import morgan from "morgan"
import cors from "cors"
const app = express()

app.use(morgan("tiny"))
app.use(cors())

app.get('/', (req, res) => {
    console.log("Connected")
    return res.send("Connected")
})

export default app

