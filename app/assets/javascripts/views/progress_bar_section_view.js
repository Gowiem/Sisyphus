Sis.ProgressBarSectionView = Ember.View.extend({
  classNames: ['progress-bar', 'group-member-progress'],
  classNameBindings: ['progressBarClass', 'progressBarVisible:progress-bar-visible'],
  attributeBindings: ['style'],
  progressBarVisible: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      var $visibleProgressBars = $('.progress-bar-global .progress-bar-visible');

      // Make sure the 'first-progress-bar' class is on the first progress bar.
      $visibleProgressBars.removeClass('first-progress-bar')
      $visibleProgressBars.first().addClass('first-progress-bar');

      // If all subtasks are completed then we want to add the 'last-progress-bar'
      // class to our last section as it needs to have rounded corners.
      if (this.get('controller.allSubtasksCompleted')) {
        $visibleProgressBars.last().addClass('last-progress-bar');
      } else {
        $visibleProgressBars.last().removeClass('last-progress-bar');
      }
    });
    return this.get('controller.hasCompletedTasks');
  }.property('style'),
  style: function() {
    return this.get('controller.progressBarSectionStyle');
  }.property('controller.progressBarSectionStyle'),
  progressBarClass: function() {
    return this.get('controller.progressBarClass');
  }.property('controller.progressBarClass'),
  mouseEnter: function() {
    this.$('.progress-section-info').show();
  },
  mouseLeave: function() {
    this.$('.progress-section-info').hide();
  },
});