//create a express server?

const express = require('express')
const query =  require('./db')
const app = express()

app.get('/',  async(req, res)=> {
   const result = await query("select * from employee ")
        console.log(result[result.length-1]);
  res.send('Hello World')
})

app.listen(3000)