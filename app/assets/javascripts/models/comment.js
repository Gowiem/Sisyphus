Sis.Comment = DS.Model.extend({
  body: DS.attr('string'),
  isDisputed: DS.attr('boolean'),
  subtask: DS.belongsTo('subtask'),
  user: DS.belongsTo('student'),
  createdAt: DS.attr('isodate'),
  updatedAt: DS.attr('isodate')
});