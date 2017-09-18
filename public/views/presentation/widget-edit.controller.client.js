
(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", EditWebsiteController);

    function EditWebsiteController($routeParams, WidgetService) {
        var vm = this;

        function init() {
            vm.widget = WidgetService.findWidgetById($routeParams["wgid"])
        }
        init();

        function editWebsite(){
            var result = WebsiteService.updateWebsite(vm.user._id, vm.user);
            if(result === true) {
                vm.success = "user successfully updated";
            } else {
                vm.error = "user not found";
            }
        }
    }
})();