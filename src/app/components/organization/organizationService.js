angular.module('app.organization').factory('organizationService', ['$http', 'API_ENDPOINT', function($http, API_ENDPOINT) {
  var organizationServiceFactory = {};

  var _getOrganizations = function() {
    // params
    var params = {
      'url': API_ENDPOINT + '/v2/organizations'
    };

    // http headers
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var config = {
      params: params,
      headers: headers
    };

    return $http.get('/request.php', config);
  };

  var _getOrganization = function(id) {
    // params
    var params = {
      'url': API_ENDPOINT + '/v2/organizations/' + id
    };

    // http headers
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var config = {
      params: params,
      headers: headers
    };

    return $http.get('/request.php', config);
  };

  var _getSpacesForTheOrganization = function(id, ignoreLoadingBar) {
    if (typeof(ignoreLoadingBar) === 'undefined') ignoreLoadingBar = false;
    // params
    var params = {
      'url': API_ENDPOINT + '/v2/organizations/' + id +  '/spaces'
    };

    // http headers
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var config = {
      params: params,
      headers: headers,
      ignoreLoadingBar: ignoreLoadingBar
    };

    return $http.get('/request.php', config);
  };
  
  var _getQuotaForTheOrganization = function(id) {
    // params
    var params = {
      'url': API_ENDPOINT + '/v2/quota_definitions'
    };

    // http headers
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var config = {
      params: params,
      headers: headers
    };

    return $http.get('/request.php', config);
  };
  
  var _getSharedDomainsForTheOrganization = function() {
    // params
    var params = {
      'url': API_ENDPOINT + '/v2/shared_domains'
    };

    // http headers
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var config = {
      params: params,
      headers: headers
    };

    return $http.get('/request.php', config);
  };
  
  var _getPrivateDomainsForTheOrganization = function(id) {
    // params
    var params = {
      'url': API_ENDPOINT + '/v2/organizations/' + id +  '/private_domains'
    };

    // http headers
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var config = {
      params: params,
      headers: headers
    };

    return $http.get('/request.php', config);
  };
  
  var _getAllUsersForTheOrganization = function(id) {
    
    // params
    var params = {
      'url': API_ENDPOINT + '/v2/organizations/' + id +  '/users',
    };

    // http headers
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var config = {
      params: params,
      headers: headers
    };

    return $http.get('/request.php', config);
  };

  var _retrieveRolesOfAllUsersForTheOrganization = function(id) {
    
    // params
    var params = {
      'url': API_ENDPOINT + '/v2/organizations/' + id +  '/user_roles',
    };

    // http headers
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var config = {
      params: params,
      headers: headers
    };

    return $http.get('/request.php', config);
  };
  
  var _addOrganization = function(organization) {
    
    // data
    var data = {
      'url': API_ENDPOINT + '/v2/organizations',
      'name': organization.name
    };

    // http headers
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var config = {
      headers: headers
    };

    return $http.post('/request.php', data, config);
  };
  
  var _editOrganization = function(organization) {
    
    // data
    var data = {
      'url': API_ENDPOINT + '/v2/organizations/' + organization.id,
      'name': organization.name
    };

    // http headers
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var config = {
      headers: headers
    };

    return $http.put('/request.php', data, config);
  };
  
  var _deleteOrganization = function(organization) {
    
    // data
    var data = {
      'url': API_ENDPOINT + '/v2/organizations/' + organization.id,
      'guid' : organization.id,
      'async' : true,
      'recursive' : true
    };

    // http headers
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var config = {
      headers: headers,
      data: data
    };
    
    return $http.delete('/request.php', config);
  };

  var _associateUserWithOrganization = function(user) {
    console.log(user);
    // data
    var data = {
      'url': API_ENDPOINT + '/v2/organizations/' + user.organizationId + '/users',
      'username': user.name,
      //'organization_guid': user.organizationId
    };

    // http headers
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var config = {
      headers: headers
    };

    console.log(data.url);
    console.log(data.username);

    return $http.put('/request.php', data, config);
  };

  organizationServiceFactory.getOrganizations = _getOrganizations;
  organizationServiceFactory.getOrganization = _getOrganization;
  organizationServiceFactory.getQuotaForTheOrganization = _getQuotaForTheOrganization;
  organizationServiceFactory.getSpacesForTheOrganization = _getSpacesForTheOrganization;
  organizationServiceFactory.getSharedDomainsForTheOrganization = _getSharedDomainsForTheOrganization;
  organizationServiceFactory.getPrivateDomainsForTheOrganization = _getPrivateDomainsForTheOrganization;
  organizationServiceFactory.getAllUsersForTheOrganization = _getAllUsersForTheOrganization;
  organizationServiceFactory.retrieveRolesOfAllUsersForTheOrganization = _retrieveRolesOfAllUsersForTheOrganization;
  organizationServiceFactory.addOrganization = _addOrganization;
  organizationServiceFactory.editOrganization = _editOrganization;
  organizationServiceFactory.deleteOrganization = _deleteOrganization;
  organizationServiceFactory.associateUserWithOrganization = _associateUserWithOrganization;

  return organizationServiceFactory;
}]);