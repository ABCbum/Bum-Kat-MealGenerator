const db = require('./dbController')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const path = require('path')

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
});

app.get('/new', async (req, res) => {
  console.log()
  const meal = await db.getRandMeal();
  res.send(meal);
})

app.get('/new/:type', async (req, res) => {
  console.log(req.params)
  const dish = await db.getOneRandomDishFrom(req.params.type)
  res.send(dish)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))