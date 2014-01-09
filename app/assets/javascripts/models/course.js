Sis.Course = DS.Model.extend({
  title: DS.attr('string'),
  code: DS.attr('string'),
  section: DS.attr('string'),
  semester: DS.attr('string'),
  projects: DS.hasMany('project'),
  teacher: DS.belongsTo('teacher')
});