var demoApp = angular.module('demoApp', ['ui.router']);
demoApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('/login', {
      url: '/',
      templateUrl: 'views/login.html',
      controller: 'loginCtrl'
    }).state('/dashboard', {
      url: '/dashboard',
      templateUrl: 'views/dashboard.html',
      controller: 'dashboardCtrl'
    });
});

// Login Controller
demoApp.controller('loginCtrl', ['$scope','$http','$state', function($scope, $http, $state){
  $scope.showErrorMessage = false;
  $scope.submitForm = function() {
    console.log('Submit Form');
    var userData = {
      uname : $scope.username,
      psw : $scope.password
    };
    var url = '/login';
    $http.post(url, userData)
    .success(function (data, status, headers, config) {
        if(data === 'Valid User') {
            $state.go('/dashboard');
        } else {
            $scope.showErrorMessage = true;
        }
    })
    .error(function (data, status, header, config) {
      console.log('Error: ',data);
    });
  }; // end of submitForm
}]); // end of loginCtrl

// Dashboard Controller
demoApp.controller('dashboardCtrl', ['$scope', function($scope){

}]); // end of dashboardCtrl
