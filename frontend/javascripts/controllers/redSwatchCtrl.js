function RedSwatchCtrl(
  $scope,
  SwatchService
) {

  SwatchService.getRedSwatch()
    .then(function(response) {
      $scope.swatch = response.data;
    });
}

RedSwatchCtrl.$inject = [
  '$scope',
  'SwatchService',
];

module.exports = RedSwatchCtrl;
