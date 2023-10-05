
class AdminController {
    static dashboard = (req, res) => {
        res.render('admin/dashboard')
    }

    static registration =(req,res) => {
        try{
console.log(req.body)
        }
        catch(error){
            console.log(error)
        }
    }
    // static blog = (req, res) => {
    //     res.render('admin/admin_blog')
    // }
    // static about = (req, res) => {
    //     res.render('admin/about')
    // }
    // static classes = (req, res) => {
    //     res.render('admin/classes')
    // }
    // static trainers = (req, res) => {
    //     res.render('admin/trainers')
    // }
    // static blogDetails = (req, res) => {
    //     res.render('admin/category')
    // }
    // static testimonial = (req, res) => {
    //     res.render('admin/testimonial')
    // }
    // static contact = (req, res) => {
    //     res.render('admin/contact')
    // }
}
module.exports = AdminController