import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-a3iijmx-shard-00-00.4czhdqq.mongodb.net:27017,ac-a3iijmx-shard-00-01.4czhdqq.mongodb.net:27017,ac-a3iijmx-shard-00-02.4czhdqq.mongodb.net:27017/?ssl=true&replicaSet=atlas-irmbus-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
         await mongoose.connect(URL,{ useUnifiedTopology: true })
         console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}

export default Connection;