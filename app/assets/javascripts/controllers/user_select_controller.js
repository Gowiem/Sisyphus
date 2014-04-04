Sis.UserSelectController = Ember.ObjectController.extend(
  Sis.GroupMemberMixin, {
  userSelected: function(key, value) {
    var content = this.get('content'),
        students = this.get('target.content.students');

    // If the checkbox is checked then add the student (content) to the subtasks
    // associated students
    if (value === true) {
      students.addObject(content);
    } else if (value === false) {
      // Is the checkbox gets unchecked then remove the student from the subtask
      students.removeObject(content);
    }

    // The checkbox should be checked if the subtasks associated students 
    // includes this student. 
    return students.any(function(student, idx){
      return student.id === content.id;
    });
  }.property('target.content.students'),
});