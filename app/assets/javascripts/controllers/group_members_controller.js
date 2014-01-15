Sis.GroupMembersController = Ember.ArrayController.extend({
  sortProperties: ['fullName'],
  sortAscending: true,
  groupMemberCount: 0,
  init: function() {
    this.set('groupMemberCount', 0);
  }
});