import express, { json } from 'express'

export const router = (app: express.Express) => {
  app.get('/api/test', (req, res) => {
    res.json({success: true})
  })
}