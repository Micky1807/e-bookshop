import mongoose from "mongoose";


export const Connection = async (USERNAME,PASSWORD) => {
    try {
      
        const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-s1hjcab-shard-00-00.ftazuox.mongodb.net:27017,ac-s1hjcab-shard-00-01.ftazuox.mongodb.net:27017,ac-s1hjcab-shard-00-02.ftazuox.mongodb.net:27017/?ssl=true&replicaSet=atlas-du1g60-shard-0&authSource=admin&retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database connected succesfully');

    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;
