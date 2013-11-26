pavlov.specify('Project screen', function() {
  describe("Project Screen", function() {
    before(function() {
      Ember.run(Sis, Sis.advanceReadiness);
      visit("/projects/" + Sis.Project.FIXTURES[0]['id']);
      Ember.run(function() {
        var authController = Sis.__container__.lookup('controller:auth');
        console.log("subtasks length: ", authController.get('currentUser.subtasks.length'));
      });
    });

    it('should have 0% progress when no subtasks are completed', function() {
      expect(1);
      assert($('.panel-heading .progress .progress-bar').attr('style')).equals("width: 0%;");
    });

    // it('should have 1/5% progress when one subtask is completed', function() {
    //   expect(1);
    //   var expected = "width: " + (1 / 5) + "%;";
    //   click('.completed-checkbox');
    //   console.log("First subtask: ", Sis.Subtask.FIXTURES[0], " expected: ", expected);
    //   assert($('.panel-heading .progress .progress-bar').attr('style')).equals("");
    // });

  });
});