/**
 * Created by MSI on 2017/3/16.
 */
'use strict';

mrmedia.
controller('HomeCtrl', ['$scope',function($scope) {
    $('#myCarousel').carousel();
    $scope.img = {
        img_slide1 : 'slide-1.jpg',
        img_slide2 : 'slide-2.jpg',
        img_slide3 : 'slide-3.jpg',
        add : 'add.png',
        join : 'join.jpg',
        work_title : 'work-title.png',
        iphone_1 : 'iphone-bg-lg.min.png',
        iphone_2 : 'iphone6.min.png'
    }

}])