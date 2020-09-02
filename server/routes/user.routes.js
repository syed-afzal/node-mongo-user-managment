const express = require('express');
const {check} = require('express-validator');
const multer = require('multer');
const {wrap} = require('../middlewares/asycn.error.handler');

const User = require('../controllers/user.controller');
const validate = require('../middlewares/validate');

const router = express.Router();

const upload = multer().single('profileImage');

//INDEX
router.get('/', wrap(User.index));

//STORE
router.post('/', [
    check('email').isEmail().withMessage('Enter a valid email address'),
    check('username').not().isEmpty().withMessage('You username is required'),
    check('firstName').not().isEmpty().withMessage('You first name is required'),
    check('lastName').not().isEmpty().withMessage('You last name is required')
], validate, wrap(User.store));

//GET USER BY ID
router.get('/:id',  wrap(User.show));

//UPDATE
router.put('/:id', upload, wrap(User.update));

//DELETE
router.delete('/:id', User.destroy);

module.exports = router;
