/* 
* @Author: Gowiem
* @Date:   2014-01-25 16:19:38
*/
pavlov.specify('Editing Account', function() {
  fixture.preload("model_fixtures.json");
  describe('Editing Account', function() {
    var studentEmail = "gowie.matt@gmail.com",
        studentPassword = "password12",
        server,
        fixtures;
    before(function() {
      fixtures = fixture.load('model_fixtures.json', true);

      initEmber();
      emberWait().then(function() {
        server = initServer(studentEmail, fixtures);
        initAjaxFixtures(studentEmail, fixtures);
      });
      loginStudent(studentEmail, studentPassword);
    });

    after(function() {
      server.restore();
      logoutUser();

      // For some reaso the modal backdrop doesn't get removed, probably 
      // because it isn't on the body element?
      $('.modal-backdrop').remove();
    });

    it('should show the edit account modal when account is clicked in the nav', function() {
      assert(isVisible('#edit-account-modal')).isFalse();
      click('#account-button').then(function() {
        // Have to wait for half a second as it takes bootstrap a bit to get the modal shown
        wait(500, function() {
          assert(isVisible('#edit-account-modal')).isTrue("edit-account-modal was not in the dom");
          click('.modal-header button.close');
        });
      });
    })

    describe('changing name', function() {

      it('should change the users first name', function() {
        assert(getController('auth').get('currentUser.firstName')).equals('Matt', "First name was not Matt");
        click('#account-button')
        .then(function(){
          fillIn('#first-name-input', "NEW NAME")
          .click('#edit-account-submit').then(function() {
            assert($.trim($('#user-nav-container a.dropdown-toggle').text())).equals('NEW NAME Gowie');
            assert(getController('auth').get('currentUser.firstName')).equals('NEW NAME', "First name did not change");
          });
        });
      });

      it('should change the users last name', function() {
        assert(getController('auth').get('currentUser.lastName')).equals('Gowie', "Last name was not Gowie");
        click('#account-button')
        .then(function() {
          fillIn('#last-name-input', "LASTNAME")
          .click('#edit-account-submit').then(function() {
            assert($.trim($('#user-nav-container a.dropdown-toggle').text())).equals('Matt LASTNAME');
            assert(getController('auth').get('currentUser.lastName')).equals('LASTNAME', "Last name did not change");
          });
        });
      });

      it('should change the users full name', function() {
        assert(getController('auth').get('currentUser.fullName')).equals('Matt Gowie', "Full name was not Matt Gowie");
        click('#account-button')
        .then(function() {
          fillIn('#first-name-input', "NEW NAME")
          fillIn('#last-name-input', "LASTNAME")
          .click('#edit-account-submit').then(function() {
            assert($.trim($('#user-nav-container a.dropdown-toggle').text())).equals('NEW NAME LASTNAME');
            assert(getController('auth').get('currentUser.fullName')).equals('NEW NAME LASTNAME', "Full name did not change");
          });
        });
      });
    });
  });
});
