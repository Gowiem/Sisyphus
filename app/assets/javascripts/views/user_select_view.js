Sis.UserSelectView = Ember.View.extend({
  classNames: ['tag'],
  classNameBindings: ['context.userSelected:active:inactive'],
  click: function() {
    this.toggleProperty('context.userSelected');
  },
});