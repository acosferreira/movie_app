# README
This webapp was created to store movies, categories and ratings

### Requirements
- make a crud from movie, search and filters using react
- Provide actions Rest

### Data Structure
The Movie belongs to a user and category, has many ratings
The Rating has many movies and belongs to a movie
The Category has many movies and belongs to a user

### To Improve
The facet from rating and category are not updating without reload
Create a Menu
Be able to choose the size of pagination
Get the user_id from current_user
Separate react components to front-app to be more flexible and testable

### How to use the system
* If you not logged, you'll be able to see the dashboard, made the navigation
* If you are logged, you'll be able to manage all context from system, even add, edit, delete and read data
* The system are available on heroku and can be accessed by: https://vast-reef-17818.herokuapp.com/
* To make a login https://vast-reef-17818.herokuapp.com/users/sign_in
- **email:** admin@riskmethod.com
- **password:** 123456


### Technical choice to develop
- **Ruby:** ruby-2.4.0
- **Rails:** 5.2.1
- **DB Postgres:**
- **Access Control:** Devise
- **Permission:** CanCanCan
- **Deployment:** Heroku
- **Tests:** Rspec
- **View:** ReactRails
