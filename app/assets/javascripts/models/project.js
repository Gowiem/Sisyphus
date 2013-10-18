// for more details see: http://emberjs.com/guides/models/defining-models/
console.log("---> Loading project.js");
Sis.Project = DS.Model.extend({
  title: DS.attr('string'),
  users: DS.hasMany('user')
});




