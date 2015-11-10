var app = angular.module('timeApp');

app.directive('showTime', function(){
  return {
    restrict: 'E',
    template: '<div>The current time is {{time}} </div>',
    link: function(scope, element, attrs){
      var currentTime = new Date();
      scope.time = currentTime.toString();
      setInterval(function() {
      	scope.time = new Date().toString();
      	scope.$apply(); //fires off digest cycle
      }, 1000);
      // OR (also inject $interval into this directive)
      // $interval(function() {
      // 	scope.time = new Date().toString();
      // }, 1000);
    }
  }
});