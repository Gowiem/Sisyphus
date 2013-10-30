Sis.AbstractSubtaskController = Ember.ObjectController.extend({
  needs: ['requiredTasks'],
  isShowingUsers: false,
  actions: {
    toggleUserSelect: function() {
      var controller = this;
      controller.toggleProperty('isShowingUsers');
      if (controller.get('isShowingUsers')) {
        Ember.run.next(this, function() {
          // Setup the click handler to set isShowingUsers to false
          $('body').one('click', function() {
            controller.toggleProperty('isShowingUsers');
          });
          // Make sure the select-users-container doesn't trigger the above event
          $(".select-users-container").click(function(e) {
            e.stopPropagation();
            return true;
          });
        });
      }
    },
  }
});