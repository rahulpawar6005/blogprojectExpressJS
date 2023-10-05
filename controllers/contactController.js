const ContactModel = require("../models/contact");

class ContactController {
static insertContact = async(req,res) =>{
try{
const result = new ContactModel({
    name:req.body.name,
    email:req.body.email,
    subject:req.body.subject,
    message:req.body.message
})
await result.save()
console.log(result)
res.redirect('/contact')
}
catch(error){
console.log(error)
}
}
static DisplayContact = async (req,res)=>{
    try{
const result = await ContactModel.find()
res.render('admin/contact',{d:result})
    }
    catch(error){

console.log(error)
    }
}

}
module.exports = ContactController
