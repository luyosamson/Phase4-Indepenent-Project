# Renovat8 - The Crowdsourced Renovation Site
## The website is monolithic.
[It is live Here](https://phase4-production.up.railway.app/)


## Description

Come share your renovations on Renov8, an app that allows you to track your own renovations while reviewing other people's submissions. Create an account to create and remove renovations from your profile, while also being able to view others' renovations and add your reviews and "like" them.

## Front End

The front end of Renov8 was built using React  and the individual Components can be found within the src folder.

## Back End

The back end of Renov8 was built using Rails. Running `bundle install` will install all the gems and dependencies needed for this app.

## User Story

As a user, I can:
- Log in and out of the site
- View all of the renovations on the site and their corresponding reviews
- View my specific renovations and their corresponding reviews
- Create a new renovation
- Delete a renovation I created (but not one created by someone else)
- Add a "like" or "favorite" to renovations on the site (but you cannot "like" your own renovation)

## Stretch Goals/Future Functionality - Coming Soon!

As a user, I can:
- Direct message other users to get insight into how they did their renovations
- Advanced filtering to allow for searching by location, type of renovation, etc
- Be redirected to local hardware stores (Lowes, Home Depot, etc) for the materials used in the renovation I'm viewing
- Receive a "premier user" flag if I submit over 10 renovations
- Edit a renovation I created
- Create a new review for a renovation
- Edit a review I left
- Delete a review I left

# Project Template: React/Rails API

## Description

This project is scaffolded so that you can build a React frontend and Rails
backend together, and easily deploy them to Railways

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql for production and SQLite for developemt

See Environment Setup below for instructions on installing these tools if you
don't already have them.

## Setup

Start by **cloning** (not forking) the project template repository and removing
the remote:

```console
$ git clone git@github.com:learn-co-curriculum/project-template-react-rails-api.git your-project-name
$ cd your-project-name
$ git remote rm origin
```

Then, [create a new remote repository][create repo] on GitHub. Head to
[github.com](https://github.com) and click the **+** icon in the top-right
corner and follow the steps to create a new repository. **Important**: don't
check any of the options such as 'Add a README file', 'Add a .gitignore file',
etc — since you're importing an existing repository, creating any of those files
on GitHub will cause issues.

[create repo]: https://docs.github.com/en/github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line#adding-a-project-to-github-without-github-cli



Finally, connect the GitHub remote repository to your local repository and push
up your code:

```console
$ git remote add origin git@github.com:your-username/your-project-name.git
$ git push -u origin main
```

When you're ready to start building your project, run:

```sh
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

Make sure to also update this README to include documentation about
your project. Here's a list of some [awesome readmes][] for inspiration.




## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```sh
ruby -v
```

Make sure that the Ruby version you're running is listed in the [supported
runtimes][] by Heroku. At the time of writing, supported versions are 2.6.8,
2.7.4, or 3.0.2. Our recommendation is 2.7.4, but make sure to check the site
for the latest supported versions.

If it's not, you can use `rvm` to install a newer version of Ruby:

```sh
rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```sh
gem install bundler
gem install rails
```

[supported runtimes]: https://devcenter.heroku.com/articles/ruby-support#supported-runtimes

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```


