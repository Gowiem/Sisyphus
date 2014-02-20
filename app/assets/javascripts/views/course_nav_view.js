Sis.CourseNavView = Ember.View.extend({
  templateName: 'courseNav',
  tagName: 'li',
  classNameBindings: ['isSelectedCourse:active'],
  isSelectedCourse: function () {
    return false;
  }.property(),
});