Sis.UserSelectView = Ember.View.extend({
  classNames: ['tag'],
  classNameBindings: ['context.userSelected:active:inactive', 'context.progressBarClass'],
  click: function() {
    this.toggleProperty('context.userSelected');
  },
});