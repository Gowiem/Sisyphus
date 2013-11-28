pavlov.specify('Project screen', function() {

  describe("Project Screen", function() {

    var server;
    before(function() {
      // Setup Testing Container 
      $('#ember-testing-container').remove();
      $('#teaspoon-interface').after('<div id="ember-testing-container"><h3> Ember Testing Area </h3><div id="ember-testing"></div></div>');

      // Start Ember
      Sis.reset();
      Ember.run(Sis, Sis.advanceReadiness);

      server = sinon.fakeServer.create();
      setupServer(server);

      loginStudent("gowie@email.com", "password12");
    });

    after(function() {
      logoutUser();
      server.restore();
    });

    it('should have 0% progress when no subtasks are completed', function() {
      expect(1);
      assert($('.panel-heading .progress .progress-bar').attr('style')).equals("width: 0%;");
    });

    it('should have 1/5% progress when one subtask is completed', function() {
      expect(1);
      var expected = "width: " + ((1 / 5) * 100) + "%;";
      $('.completed-checkbox').first().click();
      assert($('.panel-heading .progress .progress-bar').attr('style')).equals(expected);
    });
  });
});