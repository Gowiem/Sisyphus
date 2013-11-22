class RegistrationsController < Devise::RegistrationsController
  def create
    puts "registraitons controller#create \n\n\n\n\n\n\n\n params: #{params}"
  end
end