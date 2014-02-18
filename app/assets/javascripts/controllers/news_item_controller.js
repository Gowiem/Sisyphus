Sis.NewsItemController = Ember.ObjectController.extend({
  needs: ['requiredTasks'],
  isHovering: false,
  actions: {
    open: function() {
      var subjectType = this.get('subjectType') === 'Subtask' ? 'subtask' : 'comment',
          subtasks = this.get('controllers.requiredTasks.content').mapBy('subtasks').flatten(),
          subjectParent;
      subtasks.setEach('isOpen', false);
      this.get('store').find(subjectType, this.get('subjectId')).then(function(subject) {
        if (subjectType === 'comment') {
          subjectParent = subject.get('subtask');
          subjectParent.set('isOpen', true);
          subjectParent.set('showComments', true);
        } else {
          subject.set('isOpen', true);
        }
      });
    },
  }
});