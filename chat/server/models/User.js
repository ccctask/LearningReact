import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username: {type: String,unique: true},
    password: {type: String},
},{timestamps: true})

// 创建表 User
const UserModel = mongoose.model('User',UserSchema)

export default UserModel