exports.get404Page = (req, res, next) => {
    res.status(404).render('404',{
        title: "404 Page not found",
        path: ''
    });
};