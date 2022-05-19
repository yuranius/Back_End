const express = require('express')
const app = express()
const port = 3000

app.get('/', (res) => {
  let a = 4;
  if (a > 5) {
    res.send('ok')
  } else {
    res.send('Hello World!')
  }
 
})

app.get('/yuranius', (res) => {
  res.send('Hello Yuranius!!!')
})

app.post('/yuranius', (res) => {
  res.send('Created Yuranius!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
