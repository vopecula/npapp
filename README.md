# Presentation application

This is just a front-end application written for present my front-end development abilities.

### What is the application purpose? What is the task?

This is a report system for casinos, in the mock database there are some records regarding the user activity in the casinos.

The application generates some kind of reports for the customer, who wants to know how the users are spending there money in the casino.
The customer wants to see all the winning machine statuses in the casino, he don't want to lose money.

### Reports

Reports can be divided in two categories.
* Machines
* Users, customers

#### Machine reports
* Top 5 machines filtered after income
* Top 5 machines filtered by losses
* Runtime loss
* Usage distribution
* Usage / income ratios

#### Customer reports
* Age distribution
* Machine usages by ages
* Loss by age
* Win by age
* Gender distribution

### Dashboard
* Monthly incomes
* Machine incomes
* User age incomes
* Machine stop times

All user/customer ages are divided by the following intervals
* 18-21
* 21-25
* 25-28
* 28-35
* 35-45
* 45-

### Additional information
The site needs a basic login site containing only the following elements:
* Username field
* Password field
* Submit button
* Casino login title text

### Database, API
All data request is served by the local json-server plugin with mock data provided in a json file in the app's route folder.

# Developer notes

Notes of the development process.

### Modules
* Report (because it contains component only for this module)
  * Filter component

### Components (doesn't manipulates state directly)
* Navbar
  * Nav from bootstrap library
  * Fixed position always on top
* Sidebar
  * Fixed position always on the left side offset top with navbar height
  * Contains router links
* Filter
  * Fixed position always on the right side of the page
  * Manages filter properties of the report site
  * Used only on the report sites
* Panel
  * Bootstrap card element
  * Has a title and a content section
* Diagrams
  * Every diagram comes form the Highcharts library
  
### Librarys
* Angular as the host application
* NGRX as the state management lib
* Bootstrap 4 as the main CSS lib
* json-server as the backend api
* angular-highcharts as the Highcharts lib wrapper for diagrams


`Created by Tamás Kecskés @ 2018`
