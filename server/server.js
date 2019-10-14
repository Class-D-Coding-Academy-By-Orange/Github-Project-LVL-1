const express = require('express')
const cors = require('cors')
const uuid = require('uuid')
let repos = require('./data')

const app = express()
app.use(cors())
app.use((request, response, next) => {
    response.header(`Access-Control-Allow-Origin`, `*`)
    response.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-with, Content-Type, Accept`)
    next()
})
app.use(express.json())

app.get('/', (request, response) => response.json('test working'))

app.get('/get_data', (request, response) => {
    response.json(repos)
})

app.post('/add', (request, response) => {
  repos.push({
      id: uuid.v4(),
      title: request.body.title,
      status: request.body.status,
      language: request.body.language
  })
  response.json(repos)
})

app.delete('/delete/:id', (request, response) => {
    repos = repos.filter(repo => repo.id !== request.params.id)
    response.json(repos)
})

app.put('/toggle/:id', (request, response) => {
    repos = repos.map(repo => {
        if (repo.id === request.params.id) {
          if (repo.status === 'Private') {
            repo.status = 'Public'
          } else {
            repo.status = 'Private'
          }
        }
        return repo
      })
    response.json(repos)
})

const PORT = 9500
app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`)
})
