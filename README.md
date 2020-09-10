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

## Hooks

1. Allows to use features without writing a class.
2. Some features are useful in improving performance in terms of less re-rendering.
3. It is easier to use hooks.

Note: this project can still be improve and not alawys a silver bullet

useEffect:

1.  Avoid re-rendering data when component fetch data.
2.  similar to props cycle, re-renders components upon receive props.

useMemo: check changes, if have re-renders components

useCallBack: prevent function from every single render. Without it it re-renders the component
example , onChange replacing changeFirstName to (event) => setFirstName(event)

useRef: counts how many times it re-renders the component

## File structures

Most of the time we developers need to come out a file structure or wants to know the overview what components or functions use in other files easily.

type `npx destiny ./src` shows the project dependency
type `npx destiny ./src --write` rearrages the components into that given structure

## Resource

[Tutorial on react hooks](https://www.youtube.com/watch?v=9xhKH43llhU&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM)

[Prettier for file structures](https://www.youtube.com/watch?v=rGYbrIf-y58&ab_channel=BenAwad)
