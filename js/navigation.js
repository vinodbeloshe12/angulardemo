var adminurl = "http://localhost/selfbackend/index.php/json/";
var imgurl = "http://moviewsapp.com/selfcare/uploads/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
    name: "Home",
    classis: "active",
    link: "/home",
    subnav: [{
      name: "Subnav1",
      classis: "active",
      link: "/home"
    }]
  }];

  return {
    getallslide: function (callback) {
    $http.get(adminurl + 'getSlide').success(callback);
  },
  getSlide: function(callback) {
    console.log(adminurl);
    $http.get(adminurl + 'getSlide').success(callback);
  },
  getDeatil: function(callback) {

    $http.get(adminurl + 'getCategory').success(callback);
  },
  getProduct: function(catid,callback) {

    $http.get(adminurl + 'getProductsByCategory?categoryid='+catid).success(callback);
  },


    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  };
});
