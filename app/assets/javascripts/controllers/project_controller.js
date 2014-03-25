Sis.ProjectInfoController = Ember.ObjectController.extend({
  showingProjectDescript: false,

  // Computed Properties
  ///////////////////////
  hasDescription: function() {
    return this.get('description') !== null && this.get('description') !== "";
  }.property(),
});