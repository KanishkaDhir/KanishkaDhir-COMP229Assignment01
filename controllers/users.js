exports.user = function(req, res, next) {
    res.render('users', { title: 'Users' , name:'Student'});
  }

  exports.kanishka = function(req, res, next) {
    res.render('users', { title: 'Users' , name:'Kanishka'});
  }