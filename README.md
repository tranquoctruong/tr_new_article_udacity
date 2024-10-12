# Evaluate a News Article with Natural Language Processing

## Project Description

This project allows users to evaluate a news article through semantic analysis using the MeaningCloud API. The application uses Node.js with Express for the server and Webpack for building the frontend application. The user interface is designed with HTML, CSS (Sass), and JavaScript.

## How to Run the Application

### Prerequisites

1. **Node.js**: Make sure you have Node.js installed on your computer. You can download it from the [Node.js Official Website](https://nodejs.org/).

### Step 1: Install Dependencies

Run the following command in the root directory of the project to install all dependencies:

```bash
npm install
```

### Step 2: Configure API Key
Create a .env file in the root directory and add your API key from MeaningCloud:
```makefile
API_KEY=your_meaningcloud_api_key
```

### Step 3: Build and Run the Application
Development Environment
Run the following command to build the application in the development environment:

```bash
npm run build:dev
```

Production Environment
Run the following command to build the application for the production environment:

```bash
npm run build:prod
```
### Step 4: Start the server
```bash
npm start
```
Open your browser and go to http://localhost:8080.

### Dependencies

- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [Webpack](https://webpack.js.org/)
- [Sass](https://sass-lang.com/)
- [Babel](https://babeljs.io/)
- [MeaningCloud API](https://www.meaningcloud.com/developer)

### References

- [Webpack Documentation](https://webpack.js.org/concepts/)
- [MeaningCloud Documentation](https://www.meaningcloud.com/developer/documentation)

### Creator:
Tran Quoc Truong
