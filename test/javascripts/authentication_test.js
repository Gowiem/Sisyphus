pavlov.specify('Authentication', function() {
  describe('Authentication', function() {

    var server;
    before(function() {
      initEmber();
      server = initServer();
      initAjaxFixtures();
    });

    after(function() {
      server.restore();
    });

    describe('logging in', function() {

      it('should redirect to the project route of the new currentUser', function() {
        visit('/students/login')
          .fillIn('#email-field', "gowie@email.com")
          .fillIn('#password-field', "password12")
          .click('#login-button').then(function() {
            var currentUser = emberHelpers.getController('auth').get('currentUser');
            assert(currentUser).isDefined("currentUser not defined");
            assert(path()).equals('project', "path(): " + path() + " wasn't project");
          });
      });

    });
  });
});