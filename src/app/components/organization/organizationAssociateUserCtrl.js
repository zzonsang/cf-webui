angular.module('app.organization').controller('OrganizationAssociateUserCtrl', ['$route', '$scope', '$modalInstance', '$log', 'user', 'organizationService', 'messageService', function($route, $scope, $modalInstance, $log, user, organizationService, messageService) {

  $scope.user = {
    organizationId: user.organizationId
  };

  $scope.ok = function () {
    organizationService.associateUserWithOrganization($scope.user).then(function(response) {
      $route.reload();
      // close the modal
      $modalInstance.close();
      // set message
      messageService.addMessage('success', 'The user has been successfully added.', true);
    }, function(err) {
      // set message
      messageService.addMessage('danger', 'The user has not been added.');
      $log.error(err);

      // close the modal
      $modalInstance.close();
    });
  };
  
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);