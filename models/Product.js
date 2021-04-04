import mongoose, { models } from 'mongoose'

const productsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    mediaUrl:{
        type:String,
        required:true
    }
})
mongoose.models ={}
export default   mongoose.model('product',productsSchema)