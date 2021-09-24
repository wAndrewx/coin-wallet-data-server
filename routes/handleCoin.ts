import { Router } from 'express'
import Pool from '../db/db'
let router = Router()

router.get('/total', async (req, res) => {
    let query = await Pool.query('SELECT token_ticker, total_visits, token_name FROM coins')
    console.log(query.rows)
    console.log("test")
    res.send({ message: "Success", query: query.rows })
}) //get total coin visits
router.get('/daily', async (req, res) => {
    let query = await Pool.query('SELECT token_ticker, daily_visits, token_name FROM coins')
    console.log(query.rows)
    return res.send({ message: "Success", query: query.rows })
}) //get daily coin visits

router.patch('/total', async (req, res) => {
    let coinTicker = req.query.ticker
    let coinToken = req.query.token

    console.log(coinTicker, coinToken)
    if (coinTicker && coinToken) { // updating existing coin , need to add path to update and add coin if coin DNE
        try {
            let query = await Pool.query(
                `UPDATE coins
             SET total_visits = total_visits + 1
             WHERE token_ticker = $1 AND token_name = $2
             `,
                [coinTicker, coinToken])
            console.log(query)
        } catch (error) {
            console.log(error)
        }

        return res.send({ message: 'Updated' })

    } else {
        return res.send({ message: "Send a token name and ticker" })
    }
}) // increment total

router.patch('/daily', async (req, res) => {
    let coinTicker = req.query.ticker
    let coinToken = req.query.token

    console.log(coinTicker, coinToken)
    if (coinTicker && coinToken) { // updating existing coin , need to add path to update and add coin if coin DNE
        try {
            let query = await Pool.query(
                `UPDATE coins
             SET daily_visits = daily_visits + 1
             WHERE token_ticker = $1 AND token_name = $2
             `,
                [coinTicker, coinToken])
            console.log(query)
        } catch (error) {
            console.log(error)
        }

        return res.send({ message: 'Updated' })

    } else {
        return res.send({ message: "Send a token name and ticker" })
    }
}) // increment daily

router.patch('/daily', async (req, res) => {

    try {
        let query = await Pool.query(
            `
            UPDATE coins
            SET daily_visits = 0
            `
        )
        res.send({ message: "Reset successful" })
    } catch (error) {
        res.send(error)

    }

}) //reset daily


export default router
