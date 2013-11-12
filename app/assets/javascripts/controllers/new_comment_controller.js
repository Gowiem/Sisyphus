Sis.NewCommentController = Ember.ObjectController.extend({
  needs: ["comments"],
  init: function() {
    this.set('content', this.store.createRecord(Sis.Comment, {}));
  },
  actions: {
    createComment: function() {
      var content = this.get('content'), 
          subtask = this.get('target.target.model');
      this.get('currentUser.model').then(function(currentUser) {
        
        content.set('user', currentUser);
        subtask.get('comments').addObject(content);
        content.set('subtask', subtask);

        content.save();

        this.set('content', this.store.createRecord(Sis.Comment, {}));
      });
    }
  }
});