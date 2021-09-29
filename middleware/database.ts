import Pool from "../db/db";
import { RequestHandler } from 'express';


export const checkExistingRows: RequestHandler = async (req, res, next) => {
    let token = req.query.token
    let ticker = req.query.ticker
    try {
        const doesExist = await Pool.query(`
        SELECT token_ticker , token_name FROM coins
        WHERE token_ticker = $1 AND token_name = $2
            `, [ticker, token])

        req.doesExist = doesExist.rows.length >= 1
        next()
    } catch (error) {
        req.doesExist = false
        next()
    }
}
