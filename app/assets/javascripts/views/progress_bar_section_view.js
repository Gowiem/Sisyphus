Sis.ProgressBarSectionView = Ember.View.extend({
  classNames: ['progress-bar', 'group-member-progress'],
  classNameBindings: ['progressBarClass', 'progressBarVisible:progress-bar-visible'],
  attributeBindings: ['style'],
  progressBarVisible: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      $('.progress-bar-global .progress-bar-visible').removeClass('first-progress-bar')
                                                     .removeClass('last-progess-bar');
      $('.progress-bar-global .progress-bar-visible').first().addClass('first-progress-bar');
      $('.progress-bar-global .progress-bar-visible').last().addClass('last-progress-bar');
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