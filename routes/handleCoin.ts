import { RequestHandler, Router } from 'express'
import Pool from '../db/db'
let router = Router()

router.get('/total', async (req, res) => {
    let query = await Pool.query(
        `
    SELECT token_ticker, total_visits, token_name 
    FROM coins
    ORDER BY token_ticker DESC
    LIMIT 10
    `)
    res.send({ message: "Success", query: query.rows })
}) //get total coin visits
router.get('/daily', async (req, res) => {
    try {
        let query = await Pool.query(
            `
        SELECT token_ticker, daily_visits, token_name 
        FROM coins
        ORDER BY token_ticker DESC
        LIMIT 5
        `)
        return res.send({ message: "Success", query: query.rows })

    } catch (error) {
        return res.send({ message: error })
    }
}) //get daily coin visits

router.patch('/total', async (req, res) => {
    let coinTicker = req.query.ticker
    let coinToken = req.query.token
    let incrementQuery =
        `
    UPDATE coins
    SET total_visits = total_visits + 1,
        daily_visits = daily_visits + 1
    WHERE token_ticker = $1 AND token_name = $2
    `
    let addNewCoinQuery =
        `
    INSERT INTO coins (token_ticker,token_name,daily_visits,total_visits)
    VALUES($1, $2, $3, $4)
    `

    if (coinTicker && coinToken) { // updating existing coin , need to add path to update and add coin if coin DNE
        try {
            if (req.doesExist) {
                let query = await Pool.query(incrementQuery, [coinTicker, coinToken, 1, 1])
            } else {
                console.log("not existing")
                let query = await Pool.query(addNewCoinQuery, [coinTicker, coinToken])
            }
        } catch (error) {
            console.log(error)
        }

        return res.send({ message: 'Updated' })

    } else {
        return res.send({ message: "Send a token name and ticker" })
    }
}) // increment total


router.patch('/daily/reset', async (req, res) => {

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
