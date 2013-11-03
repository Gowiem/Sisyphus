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
  readableDate: function() {
    var dueDate = this.get('model.dueDate');
    return dueDate ? moment(dueDate).calendar() : null;
  }.property('model.dueDate'),

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