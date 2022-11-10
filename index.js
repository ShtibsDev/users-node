const exporess = require('express')

const cors = require('cors')

const app = exporess()

const users = [
  {
    id: 1,
    firstName: 'Ofir',
    lastName: 'Stiber Voronzov',
    email: 'ofirstiber@gmail.com'
  },
  {
    id: 2,
    firstName: 'Ellie',
    lastName: 'Stiber Voronzov',
    email: 'elinavoronzov@gmail.com'
  }
]

app.use(exporess.json())
app.use(cors())

app.get('/users', (_, res) => {
  res.send(users)
})

app.post('/users', (req, res) => {
  const newId = Math.max(...users.map(u => u.id)) + 1
  const newUser = {
    id: newId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }
  users.push(newUser)
  res.status(201).send(newUser)
})

app.listen(3000, () => console.log('node running'))