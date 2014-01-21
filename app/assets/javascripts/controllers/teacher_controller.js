Sis.TeacherController = Ember.ObjectController.extend({
  semesterList: function () {
    var courses = this.get('model.courses');
    var unique = {};
    var distinct = [];
    for ( var i in courses ) {
      debugger
      if (typeof(unique[courses[i].semester]) == "undefined"){
        distinct.push(courses[i].semester);  
      }
      unique[courses[i].semester] = 0;
    }
    return distinct;
  }
});
