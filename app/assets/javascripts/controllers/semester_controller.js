Sis.SemesterController = Ember.ObjectController.extend({
  selectedCourseVal: null,

  selectedCourse: function (key, value) {
    if (value === undefined) {
      if (this.get('selectedCourseVal') != null) {
        console.log("Found SelectedCourseVal: " + this.get('selectedCourseVal'));
        return this.get('selectedCourseVal');
      } else {
        console.log("Found nothing, set  FirstObject: " + this.get('courses.firstObject'));
        this.set('selectedCourseVal', this.get('courses.firstObject'));
        return this.get('courses.firstObject');
      }
    } else {
      console.log("Given val: " + value);
      this.set('selectedCourseVal', value);
      return value;
    }
  }.property('courses','content', 'selectedCourseVal'),
});