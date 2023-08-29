# Final Capstone React Front-end Project Starter
​
This is the React starter project for the final capstone. This document walks you through how to set up and run the project. 
​
## Project setup
​
The first thing you'll need to do is to download any dependencies by running this command:
​
```
npm install
```
​
Next take a moment to review the `.env` file that's located in the root of the project. You can store environment variables that you want to use throughout your application in this file. When you open it, it'll look like this:
​
```
# Java
REMOTE_API=http://localhost:9000  #changed from 9001
PORT=3001
```
​
*Note:* The Java Spring Boot 2 application server is configured to run on port 9000 instead of 8080.
​
Start your React application with the following command:
​
```
npm start
```
​
### Miscellaneous
​
By default the `npm start` command will attempt to start your application on port 3001.  If this port is already assigned it will ask if you want to use a different port.

Having "ghost apps" running using up ports wastes computer resources and eventually your computer will slow down behave erratically or even stop.

If port 3001 is already in use when you start your React front-end, consider killing the app using it and restarting your React front-end.

To kill an app using a  port so you can reuse it: `npx kill-port 3001`

To find all ports currently assigned: `netstat -aon` 
![netstat output](..\images4mdFiles\netstat-aon-command-output.png)

### Login Feature

A login feature has been fully implemented in both the front-end and back-end of the starter code.  You may want to "jazz up" the front-end web page but the processing works and probably should be left alone.

### Register Feature

The Register feature has been implemented in the back-end starter code but not the front-end.  If you'd like to provide a register feature, you will need to write the front-end process for it.
