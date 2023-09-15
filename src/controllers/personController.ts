import { Request, Response } from "express";
import { personServices } from "../services/personServices"


async function listPersons(req: Request, res: Response) {
    const person = await personServices.listPersons();
    res.status(200).send(person);
}







export const personControllers = { listPersons }