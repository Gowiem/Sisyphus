Sis.GroupMemberView = Ember.View.extend({
  didInsertElement: function() {
    this.addObserver('controller.isShowingGroupMemberInfo', this, this.animateGroupMemberInfo);
  },
  animateGroupMemberInfo: function() {
    this.$('.group-member-info-container').slideToggle('fast');
  }
});