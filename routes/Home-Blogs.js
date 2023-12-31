const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');


router.get('/' , blogController.blog_home)

router.get('/create' , blogController.blog_create_get );

router.post('/', blogController.blog_create_post)

router.get('/about' , blogController.blog_about)

router.get('/:id',blogController.blog_details )

router.delete('/:id', blogController.blog_delete )





module.exports = router;