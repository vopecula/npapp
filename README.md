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

`Created by Tamás Kecskés @ 2018`
