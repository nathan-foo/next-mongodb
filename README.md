## About the Project

This is a simple application using MongoDB with Next.js to refresh my memory.

## Notes for Setup

1. Create a new database cluster on MongoDB Atlas.
2. Get the connection string and paste it as `MONGODB_URI` in the `.env` file.
3. Append `/database_name` to the connection string to name the database.
4. Run the following commands to install the required npm packages and initialize Next.js:
```
npx create-next-app@latest
cd my-app
npm i mongodb
npm i mongoose
```
5. In the root directory, create a models folder and a file named `schema.js`.
```js
/* schema.js */
import mongoose, { Schema } from "mongoose";

const schema = new Schema(
    {
        title: String,
        description: String,
        // add more fields as needed
    },
    {
        timestamps: true,
    }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", schema);

export default Topic;
```
6. In the root directory, create a lib folder and a file named `mongodb.js`.
```js
/* mongodb.js */
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB.")
    } catch (error) {
       console.log(error);
    }
};

export default connectDB;
```
7. In the app folder, create a new route `api/routes/[id]`.
8. Create a route.js file in `api/routes` and `api/routes/[id]`.
9. Handle `GET`, `POST`, and `DELETE` requests in `api/routes`.
10. Handle dynamic `GET` and `UPDATE` requests in `api/routes/[id]`.