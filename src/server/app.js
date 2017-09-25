import express from 'express'
import template from './templates/index'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => res.send(template()))

app.listen(process.env.PORT || 3000)
