const express = require('express')
const { signup, login, protect, restrictTo, forgotPassword, resetPassword, updatePassword, logout } = require('./../controllers/authController')
const { getAllUsers, updateMe, deleteMe, deleteUser, updateUser, getUser, getMe, uploadUserPhoto, resizeUserPhoto } = require('./../controllers/userController')

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/logout', logout)

router.post('/forgotPassword', forgotPassword)
router.patch('/resetPassword/:token', resetPassword)

// Protect all routes after this middleware
router.use(protect)

router.patch('/updateMyPassword', updatePassword)

router.get('/me', getMe, getUser)
router.patch('/updateMe', uploadUserPhoto, resizeUserPhoto, updateMe)
router.delete('/deleteMe', deleteMe)

// Restrict all routes to admin after this middleware
router.use(restrictTo('admin'))

router.route('/')
    .get(getAllUsers)

router.route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = router