Sis.TaskController = Ember.ObjectController.extend({
  readableDate: function() {
    var dueDate = this.get('model.dueDate');
    return dueDate ? moment(dueDate).format('D/M') : null;
  }.property('model.dueDate'),

  isDueSoonish: function() {
    var dueDate = moment(this.get('model.dueDate')),
        twoDaysFromNow = moment().add('days', 2);
    return dueDate.isBefore(twoDaysFromNow);
  }.property('model.dueDate'),
});