Sis.Semester = DS.Model.extend({
  season: DS.attr('string'),
  year: DS.attr('string'),
  courses: DS.hasMany('course'),
  teacher: DS.belongsTo('teacher'),

  title: function(key, value) {
    if (this.get('season') && this.get('year')) {
      return this.get('season') + " " + this.get('year');
    } else {
      return '';
    }
  }.property('season', 'year'),
});