Sis.CourseNavView = Ember.View.extend({
  tagName: 'a',
  classNameBindings: ['isSelectedCourse:active'],
  isSelectedCourse: function () {
    return false;
  }.property(),
});