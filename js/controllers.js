angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout ,$http) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  // $scope.slides = [];
  // NavigationService.getallslide(function(data) {
  //   // $scope.pages =
  //   $scope.slides = data.queryresult;
  //   console.log($scope.slides);
  //
  // });

  NavigationService.getSlide(function(data) {
      $scope.homeslider = data;
  });

  // $scope.mySlides = [
  //   'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
  //   'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
  //   'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
  //   'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  // ];
})

.controller('DetailCtrl', function($scope, TemplateService, NavigationService, $timeout ,$http) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("detail");
  $scope.menutitle = NavigationService.makeactive("detail");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
$scope.ctg=function(){
  NavigationService.getDeatil(function(data) {
      $scope.category = data;
  });

};

$scope.pbycat = function(val) {
  NavigationService.getProduct(val, function(data) {
    console.log(data);
    $scope.detail = data.data.queryresult;
    $scope.prodetail = data;
  });
}



$scope.ctg();
// $scope.pbycat("FOOD MUNCHIES & BEVERAGES");
})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})

;
