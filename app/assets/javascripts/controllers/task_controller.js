Sis.TaskController = Ember.ObjectController.extend({
  readableDate: function() {
    var dueDate = this.get('model.dueDate');
    return dueDate ? moment(dueDate).format('D/M') : null;
  }.property('model.dueDate'),
});