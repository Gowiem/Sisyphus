Sis.SemesterController = Ember.ObjectController.extend({
  needs: ['course'],
  selectedCourseVal: null,

  selectedCourse: function (key, value) {
    this.set('controllers.course.selectedProjectVal', null);
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