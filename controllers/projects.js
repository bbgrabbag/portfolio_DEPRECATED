angular.module("portfolioApp")
    .controller("projectsCtrl", ["$scope", "$timeout", "$uibModal", function ($scope, $timeout, $modal) {
        $timeout(function () {
            $scope.onLoad = true;
        });
        $scope.projects = [{
            name: "Jerb",
            screenshotUrls: ["../images/home.png", "../images/add-listing.png", "../images/listings.png"],
            description: "Make your job search easier by tracking them all in one place!",
            link: "https://github.com/bbgrabbag/job-helper"
        }, {
            name: "Battleship Node JS",
            screenshotUrls: ["../images/bs-intro.png", "../images/bs-gameplay.png", "../images/bs-ending.png"],
            description: "Play a game of Battleship against the computer within Terminal!",
            link: "https://github.com/bbgrabbag/battleship"
        }
        ];
        $scope.openModal = function (_screenshot) {
            $scope.screenshot = _screenshot
            var modalInstance = $modal.open({
                templateUrl: "modalContent.html",
                controller: "projectsCtrl",
                scope: $scope
            });
        }
    }]);