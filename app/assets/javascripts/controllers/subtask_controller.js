Sis.SubtaskController = Ember.ObjectController.extend({
  isEditing: false, 
  isShowingComments: false,
  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      return model.get('isCompleted');
    } else {
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted'),
  commentsCount: function() {
    var comments = this.get('comments');
    if (comments.get('length') === 1) {
      return "1 Comment";
    } else {
      return comments.get('length') + " Comments";
    }
  }.property('model.comments'),

  // Actions
  actions: {
    openComments: function() {
      this.set('isShowingComments', true);
    },
    closeComments: function() {
      this.set('isShowingComments', false);
    },
    editTask: function() {
      this.set('isEditing', true);
    }, 
    cancelEdit: function() {
      this.set('isEditing', false);
    }
  }
});