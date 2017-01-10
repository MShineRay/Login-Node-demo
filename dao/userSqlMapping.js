// dao/userSqlMapping.js
// CRUD SQL语句
var user = {
    insert:'INSERT INTO taccount(id, loginName, loginPwd) VALUES(0,?,?)',
    update:'update user set name=?, age=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from user',
    queryUserInfoByLoginName:'select * from user where username'
};

module.exports = user;