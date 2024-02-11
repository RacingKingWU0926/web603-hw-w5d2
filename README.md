# web603-hw-w5d2

## Getting Started

This repo is a continuous work of the application "node-mongo". Its backend part has been completed in the repo `web603-hw-w5d1`. This repo will focus only the frontend part, which will use the React framework, and is created for better clarity.

### Step 1: Rebuild the App

Copy and paste all app-related files in `web603-hw-w5d1/node-mongo/`, except `node_modules/` and `package-lock.json`. 

With `node-mongo/` as the current directory, simply run `npm install` because `package.json` should have all required dependencies used in `web603-hw-w5d1` already. 

### Step 2: Connect to MongoDB and Start the App

First, start MongoDB service as a daemon process by running
```bash
$ mongod
```
or if you are running it on WSL2:
```bash
$ mongod --bind_ip 0.0.0.0
```

Then in another terminal run `npm start`. 

Use `curl` or Postman to make sure all endpoints are working correctly as before. For example:

![testing crud](screenshots/crud-test.png)

#### *Using MongoDB Compass for WSL2 Users*

If you are using MongoDB Compass to connect to the MongoDB instance in WSL2, you might need to use your real IP address instead of `localhost`.

Grab your IP address by running the following in the WSL2 terminal:
```bash
$ ip addr | grep eth0
```

The IP address might be different from what's being used in `web603-hw-w5d1/node-mongo/.env`. Edit `DATABASE` in the `.env` file if necessary, and use that IP address in MongoDB Compass. Once connected, you should see the `react-crud` database created in the previous homework.
