import { Router } from 'express'

let router = Router()

router.get('/total', (req, res) => { }) //get total coin visits
router.get('/daily', (req, res) => { }) //get daily coin visits

router.post('/total', (req, res) => { }) // increment total
router.post('/daily', (req, res) => { }) // increment daily
router.patch('/daily', (req, res) => { }) //reset daily

// router.get('/gecko', (req, res) => { }, geckoAPI)

export default router
