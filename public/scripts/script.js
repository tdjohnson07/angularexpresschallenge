angular.module('challengeApp', []);
angular.module('challengeApp').controller('MainController', function($http){
  var vm=this;
  vm.studentArray=[];
  function handleSuccess(response){
    console.log('success', response);
    vm.studentArray=response.data;
    console.log(vm.studentArray);
  }
  function handleFailure(response){
    console.log('failure');
  }
  vm.displayStudents=function(){
    $http.get('/students').then(handleSuccess, handleFailure);
  }
})
