Sis.NewCommentController = Ember.ObjectController.extend({
  needs: ["comments"],
  init: function() {
    this.set('content', this.store.createRecord(Sis.Comment, {}));
  },
  actions: {
    createComment: function() {
      var content = this.get('content'), 
          subtask = this.get('target.target.model');
      content.set('user', Sis.currentUser);
      subtask.get('comments').addObject(content);
      content.set('subtask', subtask);
      // subtask.save();
      content.save();
      this.set('content', this.store.createRecord(Sis.Comment, {}));
    }
  }
});