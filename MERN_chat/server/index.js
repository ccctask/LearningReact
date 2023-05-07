

import Express  from 'express'
import {mongoose  as mongoes} from 'mongoose'
import dotenv from 'dotenv'
import  User from './models/User.js'
import bp  from 'body-parser'
import jwt from 'jsonwebtoken'
import cors from 'cors'
// 解析 cookie
import cookieParser from 'cookie-parser'
mongoes.connect('mongodb://localhost:27017/mern_chat').catch(error => console.log(error));



const app = Express()

// 默认使用 json解析， url 参数和 body
// 设置允许跨域
app.use(bp.urlencoded({ extended: true }),bp.json(),cors({
credentials: true,
origin: 'http://localhost:5173'
}))
app.use(cookieParser())
dotenv.config()

console.log(process.env.MONGODB_URL)
const port = 8080
const jwtSecret = 'abcdefghijklmnopqrstuvwxyz'

app.get('/',  (req, res) => {
  let userinfo = {username: 'John', password: '12346'}
  User.create(userinfo)
})

app.get('/profile',(req,res)=>{
  const token=req.cookies?.token
  if(token){
      jwt.verify(token, jwtSecret,  (err, data) => {
        if(err){throw err}
        res.json(data)
    })
  }else{
    res.status(420).json('no token found')
  }
})

app.post('/register',  async(req, res) => {
  const {username, password} = req.body

  try {
    const createdUser= await User.create({username: username, password: password})
    console.log(createdUser)

    jwt.sign({userID: createdUser._id,userName: username},jwtSecret,(er,token) => {
      if(er) {throw er}
      res.cookie('token', token).status(201).json({
        id: createdUser._id
      })
    })
  } catch (error) {
    throw error
  }

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})