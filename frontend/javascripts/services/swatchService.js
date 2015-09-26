function SwatchService(
  $http
) {
  this.getRedSwatch = function() {
    return $http.get('/red');
  };

  this.getBlueSwatch = function() {
    return $http.get('/blue');
  };
}

SwatchService.$inject = [
  '$http',
];

module.exports = SwatchService;
