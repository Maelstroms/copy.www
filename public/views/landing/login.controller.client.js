/**
 * Created by grantmerrill on 5/26/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService) {
        var vm = this;

        vm.login = function (username, password) {
            UserService
                .findUserByUsernameAndPassword(username, password)
                .then(function (response) {
                    var user = response.data;
                    if (user._id) {
                        
                        $location.url("/profile/" + user._id );
                    } else {
                        vm.error = "User not found";
                    }
                });
        }
    }

})();