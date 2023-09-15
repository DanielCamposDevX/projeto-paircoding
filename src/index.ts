import express, { json } from "express";
import personRoute from "./routes/getPerson";


const app = express();
app.use(json());
app.use(personRoute)


app.listen(5000, () => console.log(`Server is up and running or port 5000`));