# PortF Coding Challenge

This project was built using PunkApi (https://punkapi.com/documentation/v2) with React, MaterialUI, Nivo, and Typescript.
Live Demo: https://matteo1222.github.io/portf-coding-challenge/

## Features

- Bar Graph that shows the sum of beers that are first brewed for each month.
- Enables users to filter the bar graph by date, and by the beer percentage (ABV).
- Responsive x-axis tick text font size.

## Future TODOs

- Write unit tests with React Testing Library
- Write end-to-end test with Cypress
- Improve UI responsiveness

## How to set up the project

### `Install Dependencies`

In the project directory, run:

```
npm install --legacy-peer-deps
```

This installs the required dependencies. The reason that we need `--legacy-peer-deps` is because current Nivo does not support React 18.

### `Start Development Server`

Run:

```
npm start
```
