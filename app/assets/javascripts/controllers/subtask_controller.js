Sis.SubtaskController = Ember.ObjectController.extend({
  isEditing: false,
  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      return model.get('isCompleted');
    } else {
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted'),

  // Actions
  actions: {
    editTask: function() {
      this.set('isEditing', true);
    }, 
    cancelEdit: function() {
      this.set('isEditing', false);
    },
  }
});