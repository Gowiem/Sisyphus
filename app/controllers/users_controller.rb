class UsersController < ApplicationController
	def create
		if true
			user = Student.new(params[:student])
		else
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
