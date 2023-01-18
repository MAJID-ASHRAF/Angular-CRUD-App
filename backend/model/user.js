import mongoose from "mongoose";
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://127.0.0.1:27017/usersDB');

const userSchema= new mongoose.Schema({
  firstName : String,
  lastName : String,
  age : Number,
  contact: Number,
  email : String,
  password : String 
})

export const User = mongoose.model('User',userSchema)