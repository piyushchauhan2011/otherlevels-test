function HelloCtrl(
  $scope
) {
  $scope.message = 'Hello World';
}

HelloCtrl.$inject = [
  '$scope',
];

module.exports = HelloCtrl;
