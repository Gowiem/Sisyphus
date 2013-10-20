Sis.User = DS.Model.extend({
  type: DS.attr('string'),
  email: DS.attr('string'),
  projects: DS.hasMany('project'),
});

Sis.Student = Sis.User.extend({
  projectGroups: DS.hasMany('projectGroup')
});

Sis.Teacher = Sis.User.extend({});