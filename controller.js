var myApp = angular.module('TaskManager', []);

myApp.controller('TaskController', function($scope){
    $scope.taskList = [];
    var tasks = [
        "Wake up at Fajar",
        "Make the prayer",
        "Eat breakfast"
    ];
    angular.forEach(tasks, function(task, key){
        $scope.taskList.push(task);
    })
    $scope.addTask = function(){
        if($scope.getTask.length > 0){
            $scope.taskList.push($scope.getTask);
            $scope.getTask = ""
        } 
    }
});