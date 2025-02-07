# Currency Converter Mini-Project

A simple currency converter application built with React, Material-UI, and Axios.

## Overview

This project allows users to convert currencies using the latest exchange rates. It features a user-friendly interface, allowing users to select the from and to currencies, enter the amount, and view the converted result.

## Features

- Currency conversion using the latest exchange rates
- User-friendly interface with Material-UI components
- Support for multiple currencies
- Error handling for invalid inputs

## Technologies Used

- React
- Material-UI
- Axios (FXratesAPI)
- Vite

## Installation

To run the project, follow these steps:

1. Clone the repository: `git clone https://github.com/AndyDrewDev/currency-convertor.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Usage

1. Open the application in your web browser: `http://localhost:3000`
2. Select the from and to currencies using the dropdown menus
3. Enter the amount to convert and view the result

## Project Structure

```
currency-convertor/
├── public/             # Public assets
│   └── vite.svg        # Vite logo
├── src/                # Source code
│   ├── components/     # React components
│   │   ├── InputAmount.jsx      # Component for amount input
│   │   ├── SelectCountry.jsx    # Currency selection component
│   │   ├── SwitchCurrency.jsx   # Button to swap currencies
│   │   └── index.js             # Components export file
│   ├── context/        # React Context API
│   │   └── CurrencyContext.jsx  # Currency context provider
│   ├── hooks/          # Custom React hooks
│   │   └── useAxios.jsx         # Hook for API requests
│   ├── App.css         # Main application styles
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point
├── .eslintrc.cjs       # ESLint configuration
├── .gitignore          # Git ignore file
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```
