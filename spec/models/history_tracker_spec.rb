describe HistoryTracker do
  context "add_description" do
    before(:each) do
      @user = Fabricate(:student)
      @subtask = Subtask.create!(title: "Testing Subtask", students: [ @user ], modifier: @user)
      @history_track = @subtask.history_tracks.first
    end

    it "should create a description after tracked item is saved" do
      expect(@history_track.description).not_to be_nil
    end

    it "should create a correct description of user full_name, action, and modified type" do
      expect(@history_track.description).to eq("#{@user.full_name} added a new Subtask")
    end
  end
end
