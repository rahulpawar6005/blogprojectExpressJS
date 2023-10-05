const AboutModel = require('../models/about')
const BlogModel = require('../models/blog')
const CategoryModel = require('../models/category')

class FrontController {
    static home = async(req, res) => {
        // res.send("hello home by controller")//method
       try{
        const blogs = await BlogModel.find().sort({_id:-1}).limit(6)
        // console.log(blogs)
        res.render('home',{b:blogs})
       }
       catch(error){
        console.log(error)
       }
    }
    static about = async(req, res) => {
        try{
// res.send("hello about by controller")
const about = await AboutModel.find().sort({_id:-1}).limit(6)
res.render('about',{a:about})
        }
        catch(error){
            console.log(error)
        }
        
    }
    static classes = (req, res) => {
        res.render('classes')                                 
    }

    static blog = async (req, res) => {
        try{
            const blogs = await BlogModel.find()
            res.render('blog',{b:blogs})
        }
        catch(error){
            console.log(error)
        }
    }


    static details = (req, res) => {
        res.render('details')

    }

    static testimonial = (req, res) => {
        res.render('testimonial')

    }
    static trainers = (req, res) => {
        res.render('trainers')

    }
    static contact = (req, res) => {
        res.render('contact')

    }
    static dashboard = (req, res) => {
        res.render('dashboard')
    }
    static login = (req, res) => {
        res.render('login')
    }
    static registration = (req, res) => {
        res.render('registration')
    }
    static blog_Details = async (req,res) => {
        try{
        //   console.log(req.params.id)
        const detail = await BlogModel.findById(req.params.id)
        const recentblogs = await BlogModel.find().limit(6)
        const category = await CategoryModel.find()
          res.render('details',{d:detail,r:recentblogs,c:category})
        }catch(error){
            console.log(error)
        }
    }
}
module.exports = FrontController