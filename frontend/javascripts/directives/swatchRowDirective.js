function SwatchRow() {
  return {
    restrict: 'E',
    scope: {
      name: '=',
      hex: '=',
    },
    templateUrl: 'partials/swatch_row.html',
    link: function(scope, el, attrs) {
      el.css('background', scope.hex);
    },
  };
}

module.exports = SwatchRow;
