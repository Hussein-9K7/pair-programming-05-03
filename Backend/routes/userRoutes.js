const express = require('express');
const userController = require('../controllers/userController');  // تأكد من أن الاستيراد صحيح
const router = express.Router();


router.post('/signup', userController.createUser);


router.post('/login', userController.loginUser);


router.get('/', userController.getAllUsers);


router.get('/:id', userController.getUserById);


router.put('/:id', userController.updateUser);


router.delete('/:id', userController.deleteUser);  

module.exports = router;
