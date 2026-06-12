import { Router } from 'express'

export const custodianRouter = Router()

custodianRouter.post('/api/v1/deposits', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — createDeposit' })
})

custodianRouter.post('/api/v1/exits/:token_id', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — createExit' })
})

custodianRouter.get('/api/v1/warehouse/:warehouse_id/inventory', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — getWarehouseInventory' })
})
