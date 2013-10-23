source 'https://rubygems.org'

ruby '2.0.0'

## Our Gems
############

gem 'mongoid', github: 'mongoid/mongoid'

# Devise Authentication, Github: https://github.com/plataformatec/devise
gem 'devise'

gem 'haml-rails'
gem 'ember-rails'

gem 'bootstrap-sass', github: 'thomas-mcdonald/bootstrap-sass'

group :development, :test do
  gem 'fabrication'
  gem 'rspec-rails'
  gem 'debugger'
  gem 'database_cleaner'
end

# Default Gems
###############

gem 'rails', '4.0.0'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Removing jBuilder in favor of active_model_serializers
# gem 'jbuilder', '~> 1.2'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end
