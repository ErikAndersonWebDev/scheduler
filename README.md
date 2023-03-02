# Interview Scheduler

## Description

Interview Scheduler is an SPA (Single Page Application) for tracking daily interviews. The Interview Scheduler was built on a Test Driven Development (TDD) approach, and was tested using Jest and Cypress. The App allows users to add, delete, and edit appointments, using React to show these updates in real-time. The App uses API requests to an SQL database to store and show appointment data, as well as keeps track of how many appointments are booked for each day. Once a day becomes full, the day becomes grey-out and shows that there are no spots remaining.

### Home Page

!["Home Page"](/public/images/Interview_Scheduler_Main.png)

### Adding an Interview

!["Home Page"](/public/images/Interview_Scheduler_Add.png)

### Deleting an Interview

!["Home Page"](/public/images/Interview_Scheduler_Delete.png)

### Full Day

!["Home Page"](/public/images/Interview_Scheduler_Full.png)

## Features

- Appointments can be made Monday - Friday
- Users can switch between days
- The number of spots still available is displayed
- A user can create a new booking by clicking the Add icon, inputting the student name, clicking on the desired interviewer, and saving the booking
- If an interview is booked, the names of the student and interviewer are displayed
- Once a day becomes full, it is displayed with a grey background and shows that no more spots are available
- A user can edit or delete a booking
  - Once clicking the Edit icon, a user can edit the student name and interviewer
  - Once clicking the Delete icon, a user can Cancel or Confirm this action

## Setup

Install dependencies with `npm install`.

```sh
npm install
```

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Dependencies

- axios
- classnames
- cypress
- normalize.css
- react
- react-dom
- react-scripts
- @babel/core
- @storybook/addon-actions
- @storybook/addon-backgrounds
- @storybook/addon-links
- @storybook/addons
- @storybook/react
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/react-hooks
- babel-loader
- prop-types
- sass
