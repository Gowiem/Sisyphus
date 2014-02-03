Sis.NewsItemController = Ember.ObjectController.extend({
  needs: ['requiredTasks'],
  isHovering: false,
  actions: {
    openTask: function() {
      console.log("openTask");
      var requiredTasks = this.get('controllers.requiredTasks.content');
      console.log("requiredTasks: ", requiredTasks);
    },
    openComments: function() {
      console.log("openComments");
    }
  }
});