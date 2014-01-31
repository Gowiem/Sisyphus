Sis.HistoryTracker = DS.Model.extend({
  projectGroup: DS.belongsTo('projectGroup'),
  description: DS.attr('string'),
  action: DS.attr('string'),
  createdAt: DS.attr('isodate'),
  modifier: DS.belongsTo('student'),
  subjectType: DS.attr('string'),
  subjectId: DS.attr('string'),

  timeAgo: function() {
    return moment(this.get('createdAt')).fromNow();
  }.property('createdAt')
});