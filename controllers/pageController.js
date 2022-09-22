exports.home = (req,res) => {
   res.render('index', {
    fromMessage: req.flash('msgOne'),
    fromMessageTwo: req.flash('msgTwo')
   });
};