Sis.UserSelectView = Ember.View.extend({
  classNames: ['tag'],
  classNameBindings: ['context.userSelected:active:inactive', 'context.progressBarClass'],
  click: function() {
    if (this.get('context.target.constructor') == 'Sis.EditSubtaskController') {
      this.toggleProperty('context.userSelected');
    }
  },
});