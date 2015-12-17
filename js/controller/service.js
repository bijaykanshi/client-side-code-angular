app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i < total; i += 1) {
      input.push(i);
    }

    return input;
  };
});
app.directive('checkImage', function($http) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            attrs.$observe('ngSrc', function(ngSrc) {
                $http.get(ngSrc).success(function(){
                }).error(function(){
                    element.attr('src', '/images/peopleList/map.png'); // set default image
                });
            });
        }
    };
});
app.directive('productionQty', function() {
  return {
    require: 'ngModel',
    link: function (scope, element, attr, ngModelCtrl) {
      function fromUser(text) {
        var transformedInput = text.replace(/[^0-9|a-z|A-Z]/g, '');
        var a = attr;
        var b = element;
        var c = scope;
        if(transformedInput !== text) {
            ngModelCtrl.$setViewValue(transformedInput);
            ngModelCtrl.$render();
        }
        return transformedInput;  // or return Number(transformedInput)
      }
      ngModelCtrl.$parsers.push(fromUser);
    }
  }; 
});
