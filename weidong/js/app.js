angular.module('starter', ['ionic', 'starter.controllers'])
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
	$ionicConfigProvider.platform.ios.tabs.style('standard'); 
	$ionicConfigProvider.platform.ios.tabs.position('bottom');
	$ionicConfigProvider.platform.android.tabs.style('standard');
	$ionicConfigProvider.platform.android.tabs.position('bottom');
	
	$ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
	$ionicConfigProvider.platform.android.navBar.alignTitle('center');
	
	$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
	$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');        
	
	$ionicConfigProvider.platform.ios.views.transition('ios'); 
	$ionicConfigProvider.platform.android.views.transition('android');
	
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/tabs.html',
    })
     .state('app.homepage', {
      url: '/homepage',
      views: {
        'tab-home': {
          templateUrl: 'templates/homepage.html',
          controller: 'indexController'
        }
      }
    })
      .state('app.prosort', {
      url: '/prosort',
      views: {
        'tab-sort': {
          templateUrl: 'templates/category.html',
          controller: 'categoryController'
        }
      }
    })
      .state('app.product', {
      url: '/product',
      views: {
        'tab-pro': {
          templateUrl: 'templates/product.html',
          controller: 'proController'
        }
      }
    })
       .state('app.shopcar', {
      url: '/shopcar',
      views: {
        'tab-shopcar': {
          templateUrl: 'templates/shopcar.html',
          controller: 'shopCarController'
        }
      }
    })
       .state('app.user', {
      url: '/user',
      views: {
        'tab-user': {
          templateUrl: 'templates/user.html',
          controller:'userController'
        }
      }
    })
       .state('prodetail', {
    	 url: '/prodetail',
     	templateUrl: 'templates/product_detail.html',
     	controller:'prodetailController'
    })
      .state('confirm_order', {
    	 url: '/confirm_order',
     	templateUrl: 'templates/confirm_order.html',
     	controller:'confirmController',
    })
      .state('pay', {
    	 url: '/pay',
     	templateUrl: 'templates/pay.html',
     	controller:'payController'
    })
       .state('search', {
    	 url: '/search',
     	templateUrl: 'templates/search.html',
     	controller:'oneController'
    })
        .state('login', {
    	 url: '/login',
     	templateUrl: 'templates/login.html',
     	controller:'loginController'
    })
        .state('regit', {
    	 url: '/regit',
     	templateUrl: 'templates/regit.html',
     	controller:'regitController'
    })
        .state('guide', {
    	 url: '/guide',
     	templateUrl: 'templates/guide.html',
     	controller:'guideController'
    })
  // 如果没有上述状态相匹配，以此作为后备
   $urlRouterProvider.otherwise('/guide');
});
