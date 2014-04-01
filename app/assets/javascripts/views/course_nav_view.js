Sis.CourseNavView = Ember.View.extend({
  templateName: 'courseNav',
  tagName: 'li',
  classNameBindings: ['isSelectedCourse:active'],

  isSelectedCourse: function () {
    return this.get('controller.isSelected');
  }.property('controller.isSelected')
});