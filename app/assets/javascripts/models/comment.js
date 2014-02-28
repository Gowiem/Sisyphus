Sis.Comment = DS.Model.extend({
  body: DS.attr('string'),
  isDisputed: DS.attr('boolean'),
  subtask: DS.belongsTo('subtask'),
  user: DS.belongsTo('student'),
  createdAt: DS.attr('isodatetime'),
  updatedAt: DS.attr('isodatetime'),
  isOpen: DS.attr('boolean')
});