import { Router } from 'express'
import { custodianRouter } from './custodian.routes.js'
import { farmerRouter } from './farmer.routes.js'
import { lenderRouter } from './lender.routes.js'

export const router = Router()

router.use(custodianRouter)
router.use(farmerRouter)
router.use(lenderRouter)
