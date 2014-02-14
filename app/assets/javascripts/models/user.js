Sis.User = DS.Model.extend({
  type: DS.attr('string'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  projects: DS.hasMany('project'),
  phone: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  currentPassword: DS.attr('string'),
  lastLogin: DS.attr('isodate'),
  // Computed Propeties
  readableLastLogin: function() {
    var lastLogin = moment(this.get('lastLogin'));
    return lastLogin.format('M/D') + ' at ' + lastLogin.format('h:mma');
  }.property('lastLogin'),
  fullName: function(key, value) {
    if (this.get('firstName') && this.get('lastName')) {
      return this.get('firstName') + ' ' + this.get('lastName');
    } else {
      return '';
    }
  }.property('firstName', 'lastName'),
  isTeacher: function() {
    return this.get('type') === "Teacher";
  }.property('type'),
  isStudent: function() {
    return this.get('type') === "Student";
  }.property('type'),
});

Sis.Student = Sis.User.extend({
  projectGroups: DS.hasMany('projectGroup'),
  subtasks: DS.hasMany('subtask'),

  completedSubtasks: function() {
    return this.get('subtasks').filterBy('isCompleted').get('length');
  }.property('subtasks.@each.isCompleted')
});

Sis.Teacher = Sis.User.extend({
  semesters: DS.hasMany('semester'),
  
  // mostRecentSemester: function() {
  //   var self = this;

  //   this.get('courses').then(function (courses) {
  //     // var diffSemesters = courses.mapBy('semester').uniq();
  //     // var diffYears = [];

  //     // // Get unique semester years
  //     // for( var i = 0; i < diffSemesters.length; i++ ) {
  //     //   var semStr = diffSemesters[i];
  //     //   var semArr = semStr.split(" ");
  //     //   var semYear = parseInt( semArr[1], 10 ); // Constant specifies to parse as base 10 value 

  //     //   // Get unique semester years
  //     //   if (!diffYears.contains( semYear )) {
  //     //     diffYears.push( semYear );
  //     //   }            
  //     // }

  //     // // Get the most recent year
  //     // var maxYear = Math.max.apply( Math, diffYears );
      
  //     // // Extract possible semesters with current year
  //     // diffSemesters = diffSemesters.filter(function (semester) {
  //     //   return (semester.indexOf(maxYear) != -1);
  //     // });

  //     // // Return Fall if it exists, otherwise return Spring
  //     // var index = diffSemesters.indexOf( "Fall " + maxYear );
  //     // if ( index === -1 ) {
  //     //   index = diffSemesters.indexOf( "Spring " + maxYear );
  //     // }
  //     // debugger
  //     // self.set('currentSemester', diffSemesters[index]);
  //   });
  // }.observes('courses.@each','content'),
});
