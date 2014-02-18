Sis.SemesterController = Ember.ObjectController.extend({
  selectedCourseVal: null,

  selectedCourse: function (key, value) {
    console.log("SelectedCourse:Val:" + value);

    if (value === undefined) {
      if (this.get('selectedCourseVal') != null) {
        return this.get('selectedCourseVal');
      } else {
        this.set('selectedCourseVal', this.get('courses.firstObject'));
        return this.get('courses.firstObject');
      }
    } else {
      this.set('selectedCourseVal', value);
      return value;
    }
  }.property('courses'),
});