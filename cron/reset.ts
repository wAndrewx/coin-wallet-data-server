import axios from 'axios'
const resetDaily = async () => {
    let res = await axios.patch('http://localhost:8080/coin/daily/reset')
    return res.data
}

const main = async () => {
    console.log("RESETTING")
    try {
        let job = await resetDaily()
        console.log(job)
    } catch (error) {
        console.log("ERROR:", error)
    }
}

main()