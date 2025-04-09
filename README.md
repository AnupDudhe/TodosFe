# TodosAppFE 🚀  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  

## 📌 Getting Started  
Follow these steps to set up and run the project locally.  

### ✅ Prerequisites  
Ensure you have the following installed on your system:  
in .env file of frontend code make following changes :-
```
REACT_APP_API_URL=http://webserverpublicIP:the_dynamicport_onwhich_your_todosapi_is_hosted_on
```
- **[Node.js](https://nodejs.org/)** (LTS version recommended)  
- **npm** (Comes with Node.js)  
### install node js 
```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```



### 📥 Installation 
1. **Clone the repository:**  
   ```sh
   git clone https://github.com/AnupDudhe/TodosFe.git    
   cd TodosBe
   npm install
   npm install dotenv
   npm start
### To build your frontend use following comman
```
   npm run build //to build you fe
```
### lets get our front production grade ready on server
```
npm install
npm run build
pm2 list
pm2 serve ./build 3000 --name "todos-frontend" --spa
pm2 serve ./build 3001 --name "todos-frontend" --spa #if you have 3000 port reserver with 3000 port
```


----------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### final frontend deployment ref :-
<img width="959" alt="image" src="https://github.com/user-attachments/assets/e8adacbe-a570-4ff1-aee6-272c36eefd7a" />

## Contributions

- **Source Code Development**: The core functionality, application logic, and coding have been designed and implemented by Anup Dudhe.
- **Infrastructure Setup**: Infrastructure components, such as server configurations, cloud services, and network setups, have been established and managed by Anup Dudhe.
- **Deployment**: The deployment process, including CI/CD pipeline setup and environment configuration, was executed by Anup Dudhe to ensure seamless application deployment.

## Developer Information

- **Anup Dudhe**  
  Software and Infrastructure Consultant  
  CodeCloud Systems  
  www.linkedin.com/in/anup-dudhe-3670331b1
