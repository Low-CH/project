This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install neccessary node modules to run the project

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Overview

This is an simplfied project uses react and a temporary server (projectServer).
It handles Creating, Reading, Updating, Deleting (CRUD) for particular record page.
All added information are fake records.

### Layouts / structure

Base on the above information, this project creates a page that uses the following:

- Table
- Button - Add, Info, Edit, Delete particular(s)
- Modal
- Form inputs.

#### App.js

Base on what I have learnt for [Presentational and Container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). Assigning that the main page (App.js) handles the api calling functions (via Particulars.js) as a Container component. It uses sideeffect (useEffect) to fetch the data once and better performance as it only rerenders when there are changes.
App.js also imports the presentational components(ModalForm.js & ParticularsTable.js).

#### Particulars.js

Centralised rest api calls for particulars table. Developers are able to find and call the settings easily.

#### ParticularsTable.js

The table has multiple rows, each row has its own data entry, info, edit and delete button(ParticularsTable.js).

#### ModalForm.js

When users interacts with Add, Info or Edit button, spopups the modal for him/her to see the details(ModalForm.js). Initally the ModalForm is splitted into 3 modals to handle adding, viewing or editing the particular. Now it has been refracted and combined into a single javascript(ModalForm.js).By doing so, developers can reference and change it easily. In modalForm.js, it reuses inputs and select for form handling. These form handling are placed in Components folder and memoized for resusablitiy in future aspects.
