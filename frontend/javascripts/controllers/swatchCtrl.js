function SwatchCtrl(
  $scope,
  SwatchService
) {

  SwatchService.getRedSwatch()
    .then(function(response) {
      $scope.redSwatch = response.data;
    });

  SwatchService.getBlueSwatch()
    .then(function(response) {
      $scope.blue = response.data;
    });
}

SwatchCtrl.$inject = [
  '$scope',
  'SwatchService',
];

module.exports = SwatchCtrl;
