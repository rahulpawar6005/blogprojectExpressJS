const BlogModel = require('../models/blog')
var cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: 'dgbbepc0q',
    api_key: '274387248119353',
    api_secret: 'aWSdJP5n59kR0RPdnwSPLUO9m00',
    // secure: true
});


class BlogController {
    static displayBlog = async (req, res) => {
        try {
            const find = await BlogModel.find()

            // console.log(find)
            res.render('admin/admin_blog', { b: find })
        }
        catch (error) {
            console.log(error)

        }
    }
    static blogView = async (req, res) => {
        try {
            const result = await BlogModel.findById(req.params.id)
            // console.log(result)
            res.render('admin/blog/view', { view: result })
        }

        catch (error) {
            console.log(error)
        }
    }
    static blogEdit = async (req, res) => {
        try {
            const edit_fun = await BlogModel.findById(req.params.id)
            // console.log(edit_fun)
            res.render('admin/blog/edit', { edit: edit_fun })
        }
        catch (error) {
            console.log(error)
        }
    }
    static blogUpdate = async (req, res) => {
        try {
             //delete image at server
             const blog = await BlogModel.findById(req.params.id)
             const imageId = blog.image.public_id
             // console.log(imageId)
             await cloudinary.uploader.destroy(imageId)
              // console.log(req.files.image)
              //for insert image
            const file = req.files.image
            const myImage = await cloudinary.uploader.upload(file.tempFilePath, {
                folder: 'blogImage'
            })
            // console.log(req.body)
            // console.log(req.params.id)
            const update = await BlogModel.findByIdAndUpdate(req.params.id, {
                title: req.body.title,
                description: req.body.description,
                image: {
                    public_id: myImage.public_id,
                    url: myImage.secure_url

                }
            })
            await update.save()
            res.redirect('/admin/admin_blog')
        } catch (error) {
            console.log(error)
        }
    }
    static blogDelete = async (req, res) => {
        try {
            //delete image at server
            const blog = await BlogModel.findById(req.params.id)
            const imageId = blog.image.public_id
            // console.log(imageId)
            await cloudinary.uploader.destroy(imageId)
            await BlogModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/admin_blog')
        }
        catch (error) {
            console.log(error)
        }
    }
    static insertblog = async (req, res) => {
        try {
            // console.log(req.files.image)
            const file = req.files.image
            const myImage = await cloudinary.uploader.upload(file.tempFilePath, {
                folder: 'blogImage'
            })
            // console.log(myImage)
            const result = new BlogModel({
                title: req.body.title,
                description: req.body.description,
                image: {
                    public_id: myImage.public_id,
                    url: myImage.secure_url

                }
            })
            await result.save()

            // //route url in redirect
            res.redirect('/admin/admin_blog')
        }
        catch (error) {
            console.log(error)
        }
    }
}
module.exports = BlogController