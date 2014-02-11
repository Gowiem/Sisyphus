Sis.Project = DS.Model.extend({
  title: DS.attr('string'),
  course: DS.belongsTo('course'),
  students: DS.hasMany('student'),
  projectGroups: DS.hasMany('projectGroup'),
  requiredTasks: DS.hasMany('requiredTask')
});




