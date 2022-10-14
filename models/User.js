const mongoose=require('mongoose');
//mongoose object has a property - schema, take the property and send it to a new variable
const { Schema }=mongoose;

const userSchema=new Schema({
  googleId: String
})

mongoose.model('users',userSchema);
