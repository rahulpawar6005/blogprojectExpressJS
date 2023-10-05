const express = require('express')
const FrontController = require('../controllers/frontController')
const TeacherController = require('../controllers/teacherController')
const AdminController = require('../controllers/adminController')
const BlogController = require('../controllers/blogController')
const CategoryController = require('../controllers/categoryController')
const AboutController = require('../controllers/aboutController')
const ContactController = require('../controllers/contactController')

// const { blogUpdate } = require('../controllers/blogController')
const router = express.Router()
//path by  front controller
router.get('/',FrontController.home)
router.get('/about',FrontController.about)
router.get('/trainers',FrontController.trainers)
router.get('/blog',FrontController.blog)
router.get('/classes',FrontController.classes)
router.get('/contact',FrontController.contact)
router.get('/testimonial',FrontController.testimonial)
router.get('/details',FrontController.details)
router.get('/login',FrontController.login)
router.get('/registration',FrontController.registration)
router.get('/dashboard',FrontController.dashboard)
router.get('/blogDetails/:id',FrontController.blog_Details)

//Admin controller
router.get('/admin/dashboard',AdminController.dashboard)
router.post('/admin_registration',AdminController.registration)
// router.get('/admin/admin_blog',AdminController.blog)
// router.get('/admin/about',AdminController.about)
// router.get('/admin/classes',AdminController.classes)
// router.get('/admin/trainers',AdminController.trainers)
// router.get('/admin/category',AdminController.blogDetails)
// router.get('/admin/testimonial',AdminController.testimonial)
// router.get('/admin/contact',AdminController.contact)
//blog controller
router.get('/admin/admin_blog',BlogController.displayBlog)
router.post('/insertblog',BlogController.insertblog)
router.get('/blogview/:id',BlogController.blogView)
router.get('/blogedit/:id',BlogController.blogEdit)
router.post('/blogupdate/:id',BlogController.blogUpdate)
router.get('/admin/blog/delete/:id',BlogController.blogDelete)


//category controller
router.get('/admin/admin_category',CategoryController.categoryDisplay)
router.post('/categoryblog',CategoryController.displayBlog)
router.get('/categoryview/:id',CategoryController.blogView)
router.get('/categoryedit/:id',CategoryController.blogEdit)
router.post('/categoryupdate/:id',CategoryController.blogUpdate)
router.get('/admin/category/delete/:id',CategoryController.blogDelete)
//about controller
router.get('/admin/about_us',AboutController.aboutDisplay)
router.post('/aboutblog',AboutController.displayBlog)
router.get('/aboutview/:id',AboutController.blogView)
router.get('/aboutedit/:id',AboutController.blogEdit)
router.post('/aboutupdate/:id',AboutController.blogUpdate)
router.get('/admin/about/delete/:id',AboutController.blogDelete)
//teacher controller
router.get('/teacher/teacherDetails',TeacherController.teacher)
//contact controller
router.get('/admin/contact',ContactController.DisplayContact)
router.post('/insertcontact',ContactController.insertContact)

module.exports = router