function Config(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      url: '/',
      abstract: true,
      templateUrl: 'colors/index.html',
      controller: 'HelloCtrl',
    })
    .state('root.swatch', {
      url: '',
      templateUrl: 'swatch/index.html',
    })
    .state('root.redSwatch', {
      url: 'red',
      templateUrl: 'swatch/red.html',
      controller: 'RedSwatchCtrl',
    })
    .state('root.blueSwatch', {
      url: 'blue',
      templateUrl: 'swatch/blue.html',
      controller: 'BlueSwatchCtrl',
    })
    .state('root.users', {
      url: 'users',
      templateUrl: 'users/index.html',
    });

  // $locationProvider.html5Mode(true);
}

Config.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
];

module.exports = Config;
