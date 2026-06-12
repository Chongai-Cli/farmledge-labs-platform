import { Router } from 'express'

export const lenderRouter = Router()

lenderRouter.get('/api/v1/lender/farmers/:farmer_id/collateral', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — getFarmerCollateral' })
})

lenderRouter.get('/api/v1/lender/tokens/:token_id/verify', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — verifyToken' })
})

lenderRouter.post('/api/v1/lender/tokens/:token_id/lock', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — lockToken' })
})
