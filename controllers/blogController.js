//all the logic goes in this file

// blog_home, blog_details, blog_about, blog_create_get, blog_create_post, blog_delete

const Blog = require('../models/blogSchema');

// gets a home page

const blog_home = (req,res) =>
{
    Blog.find().sort({createdAt: -1})
    .then((result) =>
    {
        res.render('home', { title: 'Blogs',blogs: result})
    })
}



// gets a create page

const blog_create_get = (req,res) =>
{
    res.render('newBlog', {title: 'Create'});
}

//gets an about page

const blog_about = (req,res) =>
{
    res.render('about' , {title: 'About'});
}

// Posts a blog

const blog_create_post = (req,res) =>
{
    const blog = new Blog(req.body);

    blog.save().
    then((result) =>
    {
        res.redirect('/');
    })
    .catch((err) =>
    {
        console.log(err);
    })

}


// Gets full page of a blog

const blog_details = (req,res) =>
{
    const id = req.params.id;
    Blog.findById(id)
    .then((result) =>
    {
        res.render('details' , {blog: result, title: 'Blog details' })
    })
    .catch((err) =>
    {
        console.log(err);
    })
}

// Deletes a blog

const blog_delete = (req,res) =>
{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result =>
    {
        res.json({ redirect: '/' })
    })
    .catch((err) =>
    {
        console.log(err);
    })

}



module.exports =
{
    blog_home,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete,
    blog_about
}

