class CommentsController < ApplicationController
  before_action :set_comment, only: [:update, :destroy]

  def create
    subtask_id = params[:comment][:subtask_id]
    @comment = Comment.new(comment_params)
    @comment.subtask = Subtask.find(subtask_id)

    respond_to do |format|
      if @comment.save
        format.json { render json: @comment }
      else
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @comment.destroy()
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    def set_comment
      comment_id = BSON::ObjectId.from_string(params[:id])
      subtask = Subtask.where("comments._id" => comment_id).first
      @comment = subtask.comments.find(comment_id)
    end

    def comment_params
      params.require(:comment).permit(:body, :user_id)
    end
end