Sis.User = DS.Model.extend({
  email: DS.attr('string')
});


Sis.Student = Sis.User.extend({
  projects: DS.hasMany('project')
});