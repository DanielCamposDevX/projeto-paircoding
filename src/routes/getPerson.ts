import { personControllers } from "../controllers/personController";
import { Request, Response, Router } from "express";

const personRoute = Router();


personRoute.get('/person',personControllers.listPersons)


export default personRoute;