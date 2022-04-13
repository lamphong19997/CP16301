const userModel = require('./model');
/**
 * service: tầng giao tiếp với database
 */

exports.login = async (username) => {
    // const user = data.filter(item => item.username == username)[0];
    // return user;
    const user = await userModel.findOne({ username: username },'id username password');
    return user;
}

exports.register  = async (username, password) => {
    const user = new userModel({ username, password });
    return await user.save();
}

var data = [
    {id: 1, username: 'admin@gmail.com', password: '1', name: 'a'},
    {id: 2, username: 'manager@gmail.com', password: '1', name: 'm'},
]