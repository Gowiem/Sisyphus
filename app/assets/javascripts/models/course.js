Sis.Course = DS.Model.extend({
  title: DS.attr('string'),
  code: DS.attr('string'),
  section: DS.attr('string'),
  projects: DS.hasMany('project', { async: true }),
  semester: DS.belongsTo('semester')
});