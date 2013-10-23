Sis.User = DS.Model.extend({
  type: DS.attr('string'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  projects: DS.hasMany('project'),
  currentUser: DS.attr('boolean'),
  // Computed Propeties
  fullName: function(key, value) {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),
});

Sis.Student = Sis.User.extend({
  projectGroups: DS.hasMany('projectGroup')
});

Sis.Teacher = Sis.User.extend({});