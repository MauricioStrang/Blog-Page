// since we are using dev mode, everytime we refresh the app, it's going to create a new connection

import mongoose from "mongoose";

const connection = {};  //we don't want that, so we create this empty object

export const connectToDb = async ()=>{
    try {
        if(connection.isConnected){
            console.log("Using existing connection");
            return;    // we don't create anything
        }
        //if not, we create a new connection
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState; //this populate the connection object with a 1 indicating that we are connected
      } catch (error) {
        console.error("Error connecting to the database:", error);
        throw new Error(`Could not connect to the database: ${error.message}`);
      }
};