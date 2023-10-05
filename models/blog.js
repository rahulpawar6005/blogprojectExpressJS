const mongoose = require('mongoose')


//define schema/field

const BlogSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
image:{
public_id:{
  type:String
},
url:{
type:String
}
}
},{timestamps:true})
//create collections
//blog is a name of collection and BlogSchema take a fields
const BlogModel = mongoose.model('blog',BlogSchema)

module.exports = BlogModel