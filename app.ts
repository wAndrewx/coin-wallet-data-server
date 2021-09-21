import express from "express"
import morgan from "morgan"
import cors from "cors"
import handleCoin from "./routes/handleCoin"
const app = express()

app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())
app.use('/coin', handleCoin)

app.get('/', (req, res) => {
    console.log("Connected")
    return res.send("Connected")
})

export default app

