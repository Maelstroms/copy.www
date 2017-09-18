(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;

        vm.register = function(username, password, passconfirm){
            if(password === passconfirm) {
                UserService
                    .createUser(username, password)
                    .then(function (response) {
                        var user = response.data;
                        if (user._id) {
                            $location.url("/profile/" + user._id);
                        } else {
                            vm.error = "User failed to create";
                        }
                    });
            }
            else{
                vm.error = "Password does not match confirmation";
            }
        }

    }
})();