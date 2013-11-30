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
      before(function() {
        visit('/students/login')
          .fillIn('#email-field', "gowie@email.com")
          .fillIn('#password-field', "password12")
          .click('#login-button');
      });

      it('should have a currentUser and redirect to the project route', function() {
        var currentUser = emberHelpers.getController('auth').get('currentUser');
        assert(currentUser).isDefined("currentUser not defined");
        assert(path()).equals('project', "path(): " + path() + " wasn't project");
      });

      it('should show the users projects in the project select', function() {
        Ember.run(function() {
          var numberOfProjects = emberHelpers.getController('auth').get('currentUser.projects.length');
          assert($('.project-nav-item').length).equals(numberOfProjects, "Number of project-nav-items didn't match numberOfProjects");
        });
      });
    });

    describe('logging out', function() {
      before(function() {
        visit('/students/login')
          .fillIn('#email-field', "gowie@email.com")
          .fillIn('#password-field', "password12")
          .click('#login-button')
          .then(function() {
            var currentUser = emberHelpers.getController('auth').get('currentUser');
            assert(currentUser).isDefined("currentUser not defined");
          });
      });

      it('should have the logout button in the dom', function() {
        assert(emberHelpers.exists('#logout-button')).equals(true, "Logout button not found");
      });

      it('should remove the currentUser on logout', function() {
        click('#logout-button').then(function() {
          var currentUser = emberHelpers.getController('auth').get('currentUser');
          assert(currentUser).equals(null, "currentUser is defined after logout");
        });
      });

      it('should redirect to the home route on logout', function() {
        click('#logout-button').then(function() {
          assert(path()).equals('home', "Application didn't route to home after logout");
        });
      });
    });

  });
});