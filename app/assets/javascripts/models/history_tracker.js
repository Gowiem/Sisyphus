Sis.HistoryTracker = DS.Model.extend({
  projectGroup: DS.belongsTo('projectGroup'),
  action: DS.attr('string'),
  createdAt: DS.attr('isodate'),
  modifier: DS.belongsTo('user'),
  subjectType: DS.attr('string'),
  subjectId: DS.attr('string'),
});