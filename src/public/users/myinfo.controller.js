(function () {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UsersService'];
function MyInfoController(UsersService) {
  var myinfoCtlr = this;
  myinfoCtlr.user = UsersService.getUserInfo();
  if (myinfoCtlr.user !== "") {
      UsersService.getFavoriteDish(myinfoCtlr.user.short_name)
      .then(function(result) {
            myinfoCtlr.menuItem = result;
            console.log(result);
        });
      }
}

})();
