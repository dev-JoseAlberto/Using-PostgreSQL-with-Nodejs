const express = require('express')
const app = express()
const port = 3000

app.get('/', require('.route/post_route'));

app.listen(port, () => {
  console.log(`Server is running ${port}`)
})