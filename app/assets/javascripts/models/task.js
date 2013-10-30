Sis.Task = DS.Model.extend({
  type: DS.attr('string'),
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Sis.RequiredTask = Sis.Task.extend({
  project: DS.belongsTo('project'),
  subtasks: DS.hasMany('subtask')
});

Sis.Subtask = Sis.Task.extend({
  projectGroup: DS.belongsTo('projectGroup'),
  parentTask: DS.belongsTo('requiredTask'),
  students: DS.hasMany('student')
});