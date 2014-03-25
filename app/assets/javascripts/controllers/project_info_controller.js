Sis.ProjectInfoController = Ember.ObjectController.extend(
  Ember.GoogleAnalyticsTrackingMixin, {
  needs: ['projectProjectGroup'],
  groupMembers: Ember.computed.alias('controllers.projectProjectGroup.groupMembers'),
  showingProjectDescript: false,

  // Computed Properties
  ///////////////////////
  hasDescription: function() {
    return this.get('description') !== null && this.get('description') !== "";
  }.property(),

  actions: {
    showProjectDescript: function() {
      this.trackEvent('project_description', 'opened');
      this.set('showingProjectDescript', true);
    },
    hideProjectDescript: function() {
      this.trackEvent('project_description', 'closed');
      this.set('showingProjectDescript', false);
    },
  }
});