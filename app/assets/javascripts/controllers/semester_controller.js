Sis.SemesterController = Ember.ObjectController.extend({
  needs: ['course'],
  selectedCourseVal: null,

  selectedCourse: function (key, value) {
    this.set('controllers.course.selectedProject', null);
    if (value === undefined) {
      if (this.get('selectedCourseVal') !== null) {
        return this.get('selectedCourseVal');
      } else {
        this.set('selectedCourseVal', this.get('courses.firstObject'));
        return this.get('courses.firstObject');
      }
    } else {
      this.set('selectedCourseVal', value);
      return value;
    }
  }.property('courses','content', 'selectedCourseVal'),
});