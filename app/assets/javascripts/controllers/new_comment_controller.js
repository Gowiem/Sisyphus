Sis.NewCommentController = Ember.ObjectController.extend({
  needs: ["comments"],
  actions: {
    createComment: function() {
      var content = this.get('content'), 
          subtask = this.get('target.target.model'),
          currentUser = this.get('auth.currentUser');

      content.set('user', currentUser.get('content'));
      subtask.get('comments').addObject(content);
      content.set('subtask', subtask);

      content.save();

      this.set('content', this.store.createRecord(Sis.Comment, {}));
    }
  }
});