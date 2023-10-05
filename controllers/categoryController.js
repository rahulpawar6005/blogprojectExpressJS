const CategoryModel = require('../models/category')
class CategoryController {
    static displayBlog = async (req, res) => {
 

        try {

            // console.log(myImage)
            const result = new CategoryModel({
                cat_name: req.body.cat_name
            })
            await result.save()

            // //route url in redirect
            res.redirect('/admin/admin_category')
        }
        catch (error) {
            console.log(error)
        }
    }
    static categoryDisplay = async (req, res) => {
        try {
            const result = await CategoryModel.find()

            // console.log(find)
            res.render('admin/admin_category', { c: result })
        }
        catch (error) {
            console.log(error)

        }
    }

    static blogView = async (req, res) => {
        try {
            const result = await CategoryModel.findById(req.params.id)
            // console.log(result)
            res.render('admin/category/view', { view: result })
        }

        catch (error) {
            console.log(error)
        }
    }
    static blogEdit = async (req, res) => {
        try {
            const edit_fun = await CategoryModel.findById(req.params.id)
            // console.log(edit_fun)
            res.render('admin/category/edit', { edit: edit_fun })
        }
        catch (error) {
            console.log(error)
        }
    }
    static blogUpdate = async (req, res) => {
        try {

            // console.log(req.body)
            // console.log(req.params.id)
            const update = await CategoryModel.findByIdAndUpdate(req.params.id, {
                cat_name: req.body.cat_name
            })
            await update.save()
            res.redirect('/admin/admin_category')
        } catch (error) {
            console.log(error)
        }
    }
    static blogDelete = async (req, res) => {
        try {

            await CategoryModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/admin_category')
        }
        catch (error) {
            console.log(error)
        }
    }
}
module.exports = CategoryController