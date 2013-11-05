Sis.Comment = DS.Model.extend({
  body: DS.attr('string'),
  subtask: DS.belongsTo('subtask'),
  user: DS.belongsTo('student'),
  createdAt: DS.attr('isodate'),
  updatedAt: DS.attr('isodate')
});