

import Express  from 'express'
import {mongoose  as mongoes} from 'mongoose'
import dotenv from 'dotenv'
import  User from './models/User.js'
mongoes.connect('mongodb://localhost:27017/')

import { sayHi as saylog } from './models/test.js';

saylog('John'); // Hello, John!
console.log(User)
const app = Express()
dotenv.config()

console.log(process.env.MONGODB_URL)
const port = 8080


app.get('/',  (req, res) => {
  User.create({})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})