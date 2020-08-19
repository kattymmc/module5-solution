(function () {
'use strict';

angular.module('common')
.service('UsersService', UsersService);

UsersService.$inject = ['$http', 'ApiPath'];
function UsersService($http, ApiPath) {
    var service = this;
    var user = "";

    service.getFavoriteDish = function(dishShortName) {
      return $http.get(ApiPath + '/menu_items/' + dishShortName + '.json')
            .then(function (response) {
                    return response.data;
            });
    }

    service.setUserInfo = function(userInfo) {
      user = userInfo;
    };

    service.getUserInfo = function() {
      return user;
    };

}
})();
