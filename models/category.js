const mongoose = require('mongoose')


//define schema/field

const CategorySchema =new mongoose.Schema({
  cat_name:{
    type:String,
    required:true
  }

},{timestamps:true})
//create collections
//blog is a name of collection and BlogSchema take a fields
const CategoryModel = mongoose.model('category',CategorySchema)

module.exports = CategoryModel