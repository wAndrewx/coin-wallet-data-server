// might want to use pool, since there might be a potential of many queries

import { Pool } from "pg"
console.log(process.env.DB_USER)

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`


export const pool = new Pool(
    { connectionString }
)
