(function () {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UsersService'];
function SignUpController(UsersService) {
    var signupCtlr = this;
    signupCtlr.user={};
    signupCtlr.completed = false;

    signupCtlr.itemSearched = false;

    signupCtlr.validateInfo = function () {
      signupCtlr.valid = false;
      signupCtlr.searched = false;

      if(signupCtlr.user.short_name === undefined){
        return;
      }
      
      UsersService.getFavoriteDish(signupCtlr.user.short_name)
        .then(function(result) {
            signupCtlr.valid = true;
            signupCtlr.searched = true;
        },
        function(result){
          signupCtlr.searched = true;
        });

    };

    signupCtlr.submit = function() {
      UsersService.setUserInfo(signupCtlr.user);
      signupCtlr.completed = true;
  };

}

})();
