import { Router } from 'express'

export const farmerRouter = Router()

farmerRouter.get('/api/v1/farmers/:farmer_id/tokens', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — getFarmerTokens' })
})

farmerRouter.get('/api/v1/farmers/:farmer_id/history', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — getFarmerHistory' })
})

farmerRouter.post('/api/v1/transfers', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — createTransfer' })
})

farmerRouter.get('/api/v1/certificates/:token_id', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — getCertificate' })
})
