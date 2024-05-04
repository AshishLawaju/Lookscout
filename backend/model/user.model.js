import { model, Schema } from "mongoose";


const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

},{timestamps:true})


const User = model("User" , userSchema)


export {User}