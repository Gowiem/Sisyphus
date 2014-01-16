Sis.ProgressBarSectionController = Sis.GroupMemberController.extend({
  needs: ['project'],
  // Get the progressBarSection style for this user. Uses GroupMemberControllers
  // getProgressBarStlye to get the original size and then shrinks it down depending
  // on the number of other users in the group.
  progressBarSectionStyle: function() {
    var progressBarStyle = this.get('progressBarStyle'),
        progressBarPercent = /(\d+)/.exec(progressBarStyle)[0],
        groupMemberCount = this.get('controllers.project.model.students.length');
    if (progressBarPercent) {
      // exec gives us our digit back as a string, convert to int and shrink it
      // so it's 1/number of group members.
      progressBarPercent = parseInt(progressBarPercent) * (1 / groupMemberCount);
    } else {
      progressBarPercent = 0;
    }

    return "width:" + progressBarPercent + "%;";
  }.property('progressBarStyle')
});