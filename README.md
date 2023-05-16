## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the App

To run this app in your local system, just simply download the zip and unzip it. After unzip, run the command "npm install" and "npm run dev" in the terminal to get started. Finally, start the server by running the command "npm start" in the terminal.

## Components

There are two components in './src/components'
1. SubmitButton - It is the initial **Submit** button which has an **onClick** event handler, when clicked will navigate to another page by using the **useNavigate** hook of react-router-dom and fetch the contents of https://www.terriblytinytales.com/test.txt.

2. Histogram - This is the main component which is loaded when the "Submit" button is clicked and contains two functions:
* **async** function getAndParseWords which is responsible for fetching the content of https://www.terriblytinytales.com/test.txt and then parsing it to get the 20 most frequent words and storing them in a **useState** variable. **useEffect** hook of react-router-dom is used to render the function on browser.
* function exportCSV which is responsible for exporting the histogram data as a CSV file and let user download it when the **Export** button is clicked.

Return part contains the following:

1. A React Fragment wrapping up the whole component.
2. A Submit button which is displayed on initial page load. When it is clicked, the app starts to fetch content from the text file.
3. Now when the data has been stored in a variable, then only an Export button along with the Bar Chart is shown on the screen, both enclosed in a React Fragment.
4. Export has an onClick event handler which exports the data into CSV file when clicked and download the file.
5. Custom Toolkit have been used for external styling.

## Packages

1. axios package has been used for making HTTP requests, for fetching the contents of the test.txt file.
2. useEffect hook is used to render the function on browser and useState hook is used for state management and store data in variables.
3. useNavigate hook of react-router-dom is used to navigate between the pages and { BrowserRouter, Routes, Route } are used for routing the pages.
4. recharts package, which is a charting library built on react components. It is used here for creating histogram.
5. papaparse package, which is a powerful CSV parser and exporter. It has been used for exporting the histogram data as a CSV file.

## Firebase is used for deploying the website

Deployed Link - https://ttt-assignment.web.app/