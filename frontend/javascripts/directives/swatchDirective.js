function SwatchRow() {
  return {
    restrict: 'E',
    scope: {
      swatch: '=',
    },
    templateUrl: 'partials/swatch.html',
    link: function(scope, el, attrs) {
    },
  };
}

module.exports = SwatchRow;
