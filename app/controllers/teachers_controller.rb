class TeachersController < ApplicationController
  def create
    if true
      user = Teacher.new(params[:teacher])
    end

    if user.save
      render json: user, status: :created
    else
      respond_with user
    end
  end

  def show
    respond_with current_user
  end
end