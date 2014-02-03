Sis.Task = DS.Model.extend({
  type: DS.attr('string'),
  title: DS.attr('string'),
  dueDate: DS.attr('isodate'),
  isCompleted: DS.attr('boolean')
});

Sis.RequiredTask = Sis.Task.extend({
  project: DS.belongsTo('project'),
  subtasks: DS.hasMany('subtask'),
});

Sis.Subtask = Sis.Task.extend({
  isDisputed: DS.attr('boolean'),
  projectGroup: DS.belongsTo('projectGroup'),
  parentTask: DS.belongsTo('requiredTask'),
  students: DS.hasMany('student'),
  comments: DS.hasMany('comment'),
  isOpen: DS.attr('boolean')
});