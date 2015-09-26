function BlueSwatchCtrl(
  $scope,
  SwatchService
) {

  SwatchService.getBlueSwatch()
    .then(function(response) {
      $scope.swatch = response.data;
      console.log($scope.swatch);
    });
}

BlueSwatchCtrl.$inject = [
  '$scope',
  'SwatchService',
];

module.exports = BlueSwatchCtrl;
