module.exports = function(mongoose){
    var userSchema = require('./user.schema.server.js')(mongoose);
    var userModel = mongoose.model('userModel', userSchema);

    var api = {
        'createUser' : createUser,
        'findAllUser' : findAllUser,
        'findUserById' : findUserById,
        'findUserByUsername' : findUserByUsername,
        'findUserByCredentials' : findUserByCredentials,
        'updateUser' : updateUser,
        'removeRestaurantFromUser' : removeRestaurantFromUser,
        'addRestaurantForUser' : addRestaurantForUser,
        'deleteUser' : deleteUser
    };

    return api;

    // Function Definition Section

    function createUser(user){
        console.log("create user!");
        var newUser = {
            _id: new Date().getTime().toString(),
            username : user.username,
            password : user.password,
            restaurants : []
        };

        if(user.firstName){
            newUser.firstName = user.firstName;
        }
        if(user.lastName){
            newUser.lastName = user.lastName;
        }
        if(user.email){
            newUser.email = user.email;
        }
        return userModel.create(newUser);
    }

    function findAllUser() {
        return userModel.find();
    }

    function findUserById(userId){
        return userModel.findById({_id: userId});
    }

    function findUserByUsername(uname){
        return userModel.findOne({username : uname})
    }


    function findUserByCredentials(username, password){
        return userModel.findOne({
            username : username,
            password : password
        });
    }

    function updateUser(userId, user){
        return userModel.update({
            _id : userId
        }, {
            firstName : user.firstName,
            lastName : user.lastName,
            email : user.email
        });
    }

    function removeRestaurantFromUser(userId, restaurantId){
        return userModel
            .findById(userId)
            .then(
                function(user){
                    user.restaurants.pull(restaurantId);
                    return user.save();
                });
    }

    function addRestaurantForUser(userId, restaurantId) {
        return userModel
            .findOne({_id: userId})
            .then(function (user) {
                user.restaurants.push(restaurantId);
                return user.save();
            });
    }

    function deleteUser(userId){
        return userModel.remove({
            _id : userId
        });
    }
};