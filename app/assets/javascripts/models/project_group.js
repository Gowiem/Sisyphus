Sis.ProjectGroup = DS.Model.extend({
  name: DS.attr('string'),
  students: DS.hasMany('student'),
  project: DS.belongsTo('project'),
  subtasks: DS.hasMany('subtask'),
  historyTrackers: DS.hasMany('historyTracker', { 'async': true})
});