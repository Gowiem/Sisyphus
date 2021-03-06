Sisyphus
========

## Local Development Prereqs

- Install [RVM](http://rvm.io/)
- Install [Xcode Command Line Tools](https://developer.apple.com/downloads/index.action) - You may need a developer account. If you don't have one and can't download it then just get in contact with me. 
- Install ruby 2.0.0-p247 => `rvm install 2.0.0-p247`
- Install [Homebrew](http://brew.sh/) => `ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"`
- [Install MongoDB](http://docs.mongodb.org/manual/installation/) => `brew update && brew install mongodb`
- (optional) If you feel up to it follow [these steps](http://stackoverflow.com/a/5601077/1159410) so you don't have to start MongoDB everytime you want to run the local server.  

## Getting localhost up and running
Open up a terminal (terminal.app on OSX) and input the following:

- git clone the Project  => `git clone git@github.com:Gowiem/Sisyphus.git`
- Change into the Sisyphus project => `cd Workspace/Sisyphus`
- Setup a [.rvmrc file](http://rvm.io/workflow/projects) => `rvm --rvmrc --create 2.0.0-p247@sisyphus`
- Run bundler to install the project's gems (Gems are just Ruby libraries) => `bundle install`
- Start the Rails Server => `rails server` or `rails s` for short
- Go to [localhost:3000](localhost:3000) in your browser and you should be all set. 

## Running the server once you've installed everything
Once you've gotten all of the above working and you've been able to check out the site at localhost:3000 you'll only need to do the following two things to get the server running again. 
- Make sure your local copy of the project is up to date with the master by doing git pull => `cd ~/Workspace/Sisyphus && git pull origin master`
- Start MongoDB, in a new terminal window => `mongod`
- Start the Rails server from the project directory => `cd ~/Workspace/Sisyphus && rails server` 
- Go to localhost:3000 in your browser and your login information should be => Email: yourfirstname@email.com Password: password12

**Note**: Above I refer to '~/Workspace/Sisyphus' as the directory where you cloned the project. This may be different depending on where you did `git clone ...`. 

## Seed Data

### User Testing Data

Now that we're user testing our project we need the project to start off in a blank state for our testers. To do that do the following:

- Open a new tab in your terminal and naviagate to the project. Ex. `cd ~/Workspace/Sisyphus/`
- Run the rake task to reseed the database: `bundle exec rake extra_seed:scenario1`
- Once the user has run through the first scenario then you can run the second rake task: `bundle exec rake extra_seed:scenario2`
- Finished with testing and want to get back to using the project locally with your own email? Either run `bundle exec rake extra_seed:sisyphus` (will keep Janet Orange, Bill Banana, and gang around) or `bundle exec rake db:reset` (Resets the database so only our team is available)

- User login info:
  - Email: sam.doe@gmail.com
  - Password: password12

###Need some data?

Once you're all setup you can run the following command from the root directory of the project to populate your local database with seed data:

`rake db:reset`

###Need to change the data for some reason?

Check out 'db/seeds.rb'. It's just a simple ruby file which you can probably figure out by looking at it and change it depending on what you want. If you change something however make sure to run `rake db:reset` again as this will populate your changes.

## Useful Resources 

### For Designers
Note: all of these are fairly obvious as of right now, please feel free to add your own resources/tools here. 

- [Handlebar Templates](http://handlebarsjs.com/)
- [SASS](http://sass-lang.com/)
- [Bootstrap](http://getbootstrap.com/)

### For Developers

Important Gems/Libraries we're using:

- [Ember.js](https://github.com/emberjs/ember.js) (Frontend Framework)
- [Ember-Data](https://github.com/emberjs/data) (Client/Server persistence layer)
- [Active Model Serializers](https://github.com/rails-api/active_model_serializers) (Our JSON formatter)
- [Ember-Rails](https://github.com/emberjs/ember-rails) (Pulls in ember.js and ember-data, not doing much anymore)
- [Devise](https://github.com/plataformatec/devise) (Our Authentication plugin)
- [Mongoid](https://github.com/mongoid/mongoid) (Our ORM)
- [Bootstrap-Sass](https://github.com/thomas-mcdonald/bootstrap-sass) (Provides SASS version of Bootstrap for us)

Ember, Ember-Data, Rails Example Apps:


- [Rails Mongoid Devise Example](https://github.com/RailsApps/rails3-mongoid-devise) (Mongoid, Devise)
- [Simple Ember Example 1](https://github.com/dgeb/ember_data_example) (JavaScript)
- [Simple Ember Example 2](https://github.com/wulftone/rails-ember-example) (Coffeescript)
- [Simple Ember Example 3](https://github.com/bazzel/ember-sample2) - (CoffeeScript)
- [Mongoid Ember Example](https://github.com/evendis/rails-ember-mongo-bootstrap-demo) (Mongoid, CoffeeScript, Bootstrap)
- [Rails 4 Mongoid Example](https://github.com/mongoid/echo)

Random:

- [Rails/Ember Tutorial](http://www.cerebris.com/blog/2012/01/24/beginning-ember-js-on-rails-part-1/)
- [Configuring Rails for Mongoid](http://mongoid.org/en/mongoid/docs/rails.html)

