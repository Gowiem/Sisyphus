Sis.CourseNavController = Ember.ObjectController.extend({
  needs: ['semester'],

  isSelected: function() {
    return this.get('id') === this.get('target.selectedCourse.id');
  }.property('content', 'target.selectedCourse'),

  actions: {
    click: function () {
      if (!this.get('isSelected')) {
        this.get('target').set('selectedCourse', this);
      }
    }
  }

});