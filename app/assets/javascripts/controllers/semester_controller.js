Sis.SemesterController = Ember.ObjectController.extend({
  
  selectedCourse: function (key, value) {
    if (value === undefined) {
      return this.get('courses.firstObject');
    } else {
      return value;
    }
  }.property('courses'),
});