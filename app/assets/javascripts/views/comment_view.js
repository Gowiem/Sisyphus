Sis.CommentView = Ember.View.extend({
  mouseEnter: function() {
    if (this.get('controller.canDelete')) {
      this.get('controller').set('showingDelete', true);
    }
  },
  mouseLeave: function() {
    this.get('controller').set('showingDelete', false);
  },
});