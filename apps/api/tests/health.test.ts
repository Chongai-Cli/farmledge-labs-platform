import { test, before, after } from 'node:test'
import assert from 'node:assert/strict'
import type { Server } from 'node:http'
import app from '../src/app.js'

let server: Server
let baseUrl: string

before(async () => {
  await new Promise<void>((resolve) => {
    server = app.listen(0, () => resolve())
  })
  const addr = server.address()
  if (addr === null || typeof addr === 'string') {
    throw new Error('Expected a TCP address from app.listen(0)')
  }
  baseUrl = `http://127.0.0.1:${addr.port}`
})

after(async () => {
  await new Promise<void>((resolve) => server.close(() => resolve()))
})

test('GET /health returns 200 with status, version, and service', async () => {
  const res = await fetch(`${baseUrl}/health`)
  assert.equal(res.status, 200)

  const body = (await res.json()) as {
    status?: unknown
    version?: unknown
    service?: unknown
  }

  assert.equal(body.status, 'ok')
  assert.equal(body.service, 'farmledge-api')
  assert.ok(body.version, 'version should be defined')
})

test('GET /unknown-route returns 404', async () => {
  const res = await fetch(`${baseUrl}/this-route-does-not-exist`)
  assert.equal(res.status, 404)
})
