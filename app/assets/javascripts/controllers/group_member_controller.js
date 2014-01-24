Sis.GroupMemberController = Ember.ObjectController.extend({
  needs: ['project'],
  isHoveringMember: false,
  progressBarStyle: function () {
    var totalTasks = this.get('model.subtasks').get('length');
    console.log("totalTasks: ", totalTasks);
    var completedTasks = this.get('model.subtasks').filter(function (task, idx) {
      return task.get('isCompleted') === true;
    }).get('length');
    var percentCompleted = (completedTasks / totalTasks) * 100;
    console.log("percentCompleted: ", percentCompleted);
    return "width:" + percentCompleted + "%;";
  }.property('model.subtasks.@each.isCompleted'),

  emailHref: function() {
    return "mailto:" + this.get('email') + "?subject=" + this.get('controllers.project.title') + " on EasyGroupApp.com";
  }.property('email'),

  isCurrentUser: function() {
    return this.get('model.id') === this.get('auth.currentUser.id');
  }.property(),

  // Grab the this group member's index from our model (set in the afterModel
  // hook of our project_route.js) and use it to create the class which styles
  // the color of our progress bar. ex: .group-member-1
  progressBarClass: function() {
    return 'group-member-' + this.get('index');
  }.property(),

  actions: {
    editAccount: function() {
      $('#edit-account-modal').modal({});
    },
    hoveringMemberOn: function() {
      this.set('isHoveringMember', true);
    },
    hoveringMemberOff: function() {
      this.set('isHoveringMember', false);
    },
  }
});