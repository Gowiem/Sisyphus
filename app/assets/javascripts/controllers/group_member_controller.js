Sis.GroupMemberController = Ember.ObjectController.extend(
  Sis.GroupMemberMixin, Ember.GoogleAnalyticsTrackingMixin, {
  needs: ['project'],
  isShowingGroupMemberInfo: false,

  progressBarStyle: function () {
    var totalTasks = this.get('model.currentSubtasks').get('length');
    var completedTasks = this.get('model.currentSubtasks').filter(function (task, idx) {
      return task.get('isCompleted') === true;
    }).get('length');
    var percentCompleted = (completedTasks / totalTasks) * 100;
    return "width:" + percentCompleted + "%;";
  }.property('model.currentSubtasks.@each.isCompleted', 'model.currentSubtasks.length'),

  emailHref: function() {
    return "mailto:" + this.get('email') + "?subject=" + this.get('controllers.project.title') + " on EasyGroupApp.com";
  }.property('email'),

  isCurrentUser: function() {
    return this.get('model.id') === this.get('auth.currentUser.id');
  }.property(),

  actions: {
    editAccount: function() {
      $('#edit-account-modal').modal({});
    },
    showGroupMemberInfo: function() {
      this.trackEvent('group_member_info', 'open');
      this.set('isShowingGroupMemberInfo', true);
    },
    hideGroupMemberInfo: function() {
      this.trackEvent('group_member_info', 'close');
      this.set('isShowingGroupMemberInfo', false);
    },
  }
});