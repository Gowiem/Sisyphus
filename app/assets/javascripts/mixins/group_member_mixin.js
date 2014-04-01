Sis.GroupMemberMixin = Ember.Mixin.create({
  // Grab the this group member's index from our model (set in the afterModel
  // hook of our project_route.js) and use it to create the class which styles
  // the color of our progress bar. ex: .group-member-1
  progressBarClass: function() {
    return 'group-member-' + this.get('index');
  }.property(),
});