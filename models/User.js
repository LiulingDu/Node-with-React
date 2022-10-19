const mongoose=require('mongoose');
//mongoose object has a property - schema, take the property and send it to a new variable
const { Schema }=mongoose;

const userSchema=new Schema({
  googleId: String,
  credits:{type:Number,default:0}
});

mongoose.model('users',userSchema);
