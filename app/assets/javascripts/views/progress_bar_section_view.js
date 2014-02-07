Sis.ProgressBarSectionView = Ember.View.extend({
  classNames: ['progress-bar', 'group-member-progress'],
  classNameBindings: ['progressBarClass'],
  attributeBindings: ['style'],

  style: function() {
    return this.get('controller.progressBarSectionStyle');
  }.property('controller.progressBarSectionStyle'),
  progressBarClass: function() {
    return this.get('controller.progressBarClass');
  }.property('controller.progressBarClass'),
  mouseEnter: function() {
    console.log('mouseEnter');
    this.$('.progress-section-info').show();
  },
  mouseLeave: function() {
    console.log('mouseLeave');
    this.$('.progress-section-info').hide();
  },
});