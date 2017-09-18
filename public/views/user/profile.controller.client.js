/**
 * Created by grantmerrill on 7/24/17.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, UserService) {
        var vm = this;
        vm.route = $location;
    }

    var id = $routeParams["uid"];
    function init() {
        UserService
            .findUserById(id)
            .then(function(response){
                vm.user = response.data;
            });
    }
    init();

})();