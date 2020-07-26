#The SkyNet Express Login Page.

This login program has a server folder and a client folder which make up the system.
To run the program, both the server and the client should be running concurrently.

The Server.
The server is deployed to heroku online with the connection string
https://skynetlogin.herokuapp.com/ 
The connection string has been set in the react app. Once you clone the app, just start the client and work with it. No need to start the server as it has already been deployed online.


The Client Folder.
This folder contains the frontend of the login screen. Once you navigate into this client folder, run npm install to install all of the required dependencies. After installing all of the dependencies, start the client by entering the command npm start in the client directory.

This will start the react login frontend. When the frontend loads, the login screen loads first. This screen has two fields for the user to login which are the email and password fields. Both fields are required and the user can click on the login button after he has filled those fields appropriately. Upon click on the login button, the user is authenticated and if successful, a page opens which displays welcome to dashboard. 

If the user's email does not exist, he/she is not logged in but prompted that that user account does not exist and he can go back to the logi page and enter the right credentials or visit the sign up page by clicking on the sign up/ register button on the login page to sign up.

Inside the client folder, you can insert the dashboard page in the signInForm.js file. This file is in client/src/components/signInForm.js. 
Inside the render method of the signInFOrm.js file, a few checks are made to verify the password using if else blocks. If the credentials are correct, a DashBoard component 
<DashBoard /> is rendered in the else block. Replace this component with your dashboard component. 



The Sign Up Screen.
The login screen allows a user to login but the sign up page allows a new user to register with the company. Go to the sign up page by clicking Sign Up/Register button in the login screen. Enter the appropriate data in the fields required and hit sign up to sign up.

#Note: For both the sign up and sign in pages,  checks are placed on the password fields so they should be 8 to 10 characters with at least one uppercase letter, one lowercase letter, a number and special characters eg #R421Bmq

