import mongoose from "mongoose";
import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        required:true
    },
    gender: {
        type: String,
        requird:true
    },
    email: {
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    }, 
    password: {
        type:String,
        required: true
    },
    profileImage: {
        type: String,
        default:"https://images.unsplash.com/photo-1595411425732-e69c1abe2763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hhcGVzfGVufDB8fDB8fHww"
    },
    
})

UserSchema.pre("save",async function(next) {
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

const User = mongoose.model("users",UserSchema)
export default User