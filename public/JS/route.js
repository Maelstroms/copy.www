    (function () {
    angular
        .module("WebAppMaker")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/landing/login.view.client.html",
                controller: "LoginController",
                controllerAs: 'model'
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/profile/:uid", {
                templateUrl: "views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })
            .when("/profile/:uid/settings", {
                templateUrl: "views/user/settings.view.client.html",
                controller: "SettingsController",
                controllerAs: "model"
            })
            .when("/blog", {
                templateUrl: "views/presentation/widget-list.view.client.html",
                controller: "WidgetListController",
                controllerAs: "model"
            })
            .when("/blog/new", {
                templateUrl: "/assignment/views/widget/widget-choose.view.client.html",
                controller: "WidgetNewController",
                controllerAs: "model"
            })
            .when("/blog/:wgid", {
                //concious choice for wgid, it's widget Id
                templateUrl: "/assignment/views/widget/widget-edit.view.client.html",
                controller: "WidgetEditController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: '/login'
            });
    }
})();