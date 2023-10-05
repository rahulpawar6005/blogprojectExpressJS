const AboutModel = require("../models/about")
// var cloudinary = require('cloudinary').v2;


// cloudinary.config({
//     cloud_name: 'dgbbepc0q',
//     api_key: '274387248119353',
//     api_secret: 'aWSdJP5n59kR0RPdnwSPLUO9m00',
//     // secure: true
// });

class AboutController {
    static displayBlog = async (req, res) => {


        try {
            // console.log(req.files.image)
            // const file = req.files.image_about
            // const myImage = await cloudinary.uploader.upload(file.tempFilePath, {
            //     folder: 'aboutImage'
            // })
            // console.log(myImage)

            // console.log(myImage)
            const result = new AboutModel({
                header: req.body.header,
                title: req.body.title,
                description_1: req.body.description_1,
                description_2: req.body.description_2,
                // image_about: {
                //     public_id: myImage.public_id,
                //     url: myImage.secure_url
                // }


            })
            await result.save()

            // //route url in redirect
            res.redirect('/admin/about_us')
        }
        catch (error) {
            console.log(error)
        }
    }
    static aboutDisplay = async (req, res) => {
        try {
            const find = await AboutModel.find()

            // console.log(find)
            res.render('admin/about_us', { a: find })
        }
        catch (error) {
            console.log(error)

        }
    }


    static blogView = async (req, res) => {
        try {
            const result = await AboutModel.findById(req.params.id)
            // console.log(result)
            res.render('admin/about/view', { view: result })
        }

        catch (error) {
            console.log(error)
        }
    }
    static blogEdit = async (req, res) => {
        try {
            const edit_fun = await AboutModel.findById(req.params.id)
            // console.log(edit_fun)
            res.render('admin/about/edit', { edit: edit_fun })
        }
        catch (error) {
            console.log(error)
        }
    }
    static blogUpdate = async (req, res) => {
        try {

            // console.log(req.body)
            // console.log(req.params.id)
            //delete image at server
            // const blog = await BlogModel.findById(req.params.id)
            // const imageId = blog.image_about.public_id
            // // console.log(imageId)
            // await cloudinary.uploader.destroy(imageId)
            // // console.log(req.files.image)
            // //for insert image
            // const file = req.files.image_about
            // const myImage = await cloudinary.uploader.upload(file.tempFilePath, {
            //     folder: 'aboutImage'
            // })
            // console.log(req.body)
            // console.log(req.params.id)
            const update = await AboutModel.findByIdAndUpdate(req.params.id, {
                header: req.body.header,
                title: req.body.title,
                description_1: req.body.description_1,
                description_2: req.body.description_2,
                // image_about: {
                //     public_id: myImage.public_id,
                //     url: myImage.secure_url
                // }
            })
            await update.save()
            res.redirect('/admin/about_us')
        } catch (error) {
            console.log(error)
        }
    }
    static blogDelete = async (req, res) => {
        try {
            //delete image at server
            // const blog = await BlogModel.findById(req.params.id)
            // const imageId = blog.image_about.public_id
            // // console.log(imageId)
            // await cloudinary.uploader.destroy(imageId)
            await AboutModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/about_us')
        }
        catch (error) {
            console.log(error)
        }
    }
}
module.exports = AboutController