(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetNewController", WidgetNewController);

    function WidgetNewController($routeParams, WidgetService, PageService) {
        var vm = this;
        vm.route = $routeParams;
        vm.createWidget = function (widgetName) {
            var newWidget = {};
            var updatePage;
            WidgetService
                .createWidget(vm.route.pid, newWidget)
                .then(function (response) {
                    var widget = response.data;
                    var parentPage = widget.pageId;
                    if (parentPage) {
                        updatePage = {};
                        PageService
                            .updatePage(parentPage, updatePage)
                            .then(
                                $location.url("user/" + vm.route.uid + "/website/" + vm.route.wid + "/page/" + widget.pageId + "/widget")
                            )
                    }
                    else {
                        vm.error = "Widget failed to create";
                    }
                })
        }


    }
})();