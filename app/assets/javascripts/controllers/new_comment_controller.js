Sis.NewCommentController = Ember.ObjectController.extend({
  needs: ["comments"],
  actions: {
    createComment: function() {
      var content = this.get('content'),
          subtask = this.get('target.target.model'),
          currentUser = this.get('auth.currentUser'),
          projectGroup = subtask.get('projectGroup');

      // If the body of the comment is empty then don't create
      if (Ember.isEmpty(content.get('body'))) {
        return;
      }
          
      content.set('user', currentUser);
      subtask.get('comments').addObject(content);
      content.set('subtask', subtask);

      content.save();

      Sis.updateHistoryTrackers(projectGroup);

      this.set('content', this.store.createRecord(Sis.Comment, {}));
    }
  }
});