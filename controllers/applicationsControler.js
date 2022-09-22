exports.store = (req,res) => {
 req.flash('msgOne', req.body.firstname+' '+ req.body.lastname+' in our system.');
 req.flash('msgTwo', 'Your mail is: '+req.body.email);
 res.redirect('/');
};