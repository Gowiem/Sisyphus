
Sis.Project = DS.Model.extend({
  title: DS.attr('string'),
  teacher: DS.belongsTo('teacher'),
  students: DS.hasMany('student'),
  projectGroups: DS.hasMany('projectGroup'),
  requiredTasks: DS.hasMany('requiredTask')
});




