angular.module("toDoApp", []).controller("toDoContr", function ($scope) {
    $scope.taskDesc = '';
    $scope.taskList = [{ text: ' Rahul Yadav', status: true }];
    $scope.addTask = function () {
    let task = { text: $scope.taskDesc, status: false };
    $scope.taskList.push(task);
    localStorage.setItem('session', JSON.stringify($scope.taskList));
$scope.taskDesc = '';
}
$scope.gainTask = function () {
let result = [];
result = localStorage.getItem('session');
if (result === null) {
$scope.taskList = []
} else {
$scope.taskList = JSON.parse(localStorage.getItem('session'));
}
console.log($scope.taskList)
$scope.addTask()
}
$scope.remainingCount = function () {
let remainingCount = 0;
$scope.taskList.forEach(element => {
if (element.status === false) {
remainingCount++;
}
});
return remainingCount;
}
$scope.clearAll = function () {
$scope.taskList = [];
}
$scope.clearSingle = function ($index) {
$scope.taskList.splice($index, 1);
}
$scope.clearCompleted = function () {
$scope.taskList = $scope.taskList.filter((element) => {
if (!element.status) {
    return element.status;
}
})
}
$scope.name = '';
console.log($scope.name);
})