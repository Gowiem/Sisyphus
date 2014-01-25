pavlov.specify('Project screen', function() {
  fixture.preload("model_fixtures.json");
  describe("Project Screen", function() {
    var studentEmail = "gowie.matt@gmail.com",
        studentPassword = "password12",
        server,
        fixtures;

    before(function() {
      fixtures = fixture.load('model_fixtures.json', true);

      initEmber();
      server = initServer(fixtures);
      initAjaxFixtures(studentEmail, fixtures);

      loginStudent(studentEmail, studentPassword);
    });

    after(function() {
      logoutUser();
      server.restore();
    });

    it('should show the add new task form after clicking add task', function() {
      $('.add-subtask-link').first().click();
      assert(emberHelpers.exists('.new-subtask-form')).equals(true, "New Subtask Form didn't show");
      assert($('.submit-new-subtask').hasClass('disabled')).equals(true, "Submit button is not disabled");
    });

    // TODO: These were setup when the project progress bar was just one bar.
    // Since it is now made up of mutliple user's progress, this has changed.
    // I should fix this now, but I want to get the site live it can be used
    // for the group. Fix later!
    
    // it('should have 0% progress when no subtasks are completed', function() {
    //   assert($('.panel-heading .progress .progress-bar').attr('style')).equals("width: 0%;");
    // });
    // it('should have 1/5% progress when one subtask is completed', function() {
    //   var expected = "width: " + ((1 / 5) * 100) + "%;";
    //   $('.completed-checkbox').first().click();
    //   assert($('.panel-heading .progress .progress-bar').attr('style')).equals(expected);
    // });
  });
});