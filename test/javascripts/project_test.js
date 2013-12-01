pavlov.specify('Project screen', function() {

  describe("Project Screen", function() {

    var server;
    before(function() {
      initEmber();
      server = initServer();
      initAjaxFixtures();

      loginStudent("gowie@email.com", "password12");
    });

    after(function() {
      logoutUser();
      server.restore();
    });

    it('should have 0% progress when no subtasks are completed', function() {
      assert($('.panel-heading .progress .progress-bar').attr('style')).equals("width: 0%;");
    });

    it('should have 1/5% progress when one subtask is completed', function() {
      var expected = "width: " + ((1 / 5) * 100) + "%;";
      $('.completed-checkbox').first().click();
      assert($('.panel-heading .progress .progress-bar').attr('style')).equals(expected);
    });

    it('should show the add new task form after clicking add task', function() {
      console.log("Ember.Test: ", Ember.Test);
      Ember.Test.wait(function() {
        $('.add-subtask-btn').first().click();
      }).then(function() {
        console.log("SHRED");
        assert(emberHelpers.exists('.new-subtask-form')).equals(true, "New Subtask Form didn't show");
        assert($('.submit-new-subtask').hasClass('disabled')).equals(true, "Submit button is not disabled");
      });
    });
  });
});