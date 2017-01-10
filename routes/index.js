var express = require('express');
var router = express.Router();
var UserDao = require('../dao/userDao');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/login', function (req, res, next) {
    console.log('get login');
    console.log(req.params);
    console.log(req.body);//ajax post request
    console.log(req.query);//ajax get request
}).post('/login', function (req, res, next) {
    console.log('fn:login client request node params:'+JSON.stringify(req.body));
    // console.log(req.params);
    // console.log(req.body);//ajax post request
    // console.log(req.query);//ajax get request
    var sqlParams = {
        loginName: req.body.LOGINNAME,
        loginPwd: req.body.LOGINPWD
    };
    UserDao.queryUserInfoByLoginName(sqlParams, function (sqlError, sqlResponse) {

    });
});

module.exports = router;
