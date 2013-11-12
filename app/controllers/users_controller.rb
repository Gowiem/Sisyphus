class UsersController < ApplicationController
	def create
		user = User.new(user_params)

		if user.save
			render json: user, status: :created
		else
			respond_with user
		end
	end

	def show
		respond_with current_user
	end

	private
		def user_params
			params.require(:user).permit(:email, :first_name, :last_mame, :password, :password_confirmation)
		end
end
