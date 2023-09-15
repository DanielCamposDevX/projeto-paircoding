import { QueryResult } from "pg"
import { db } from "../database/dbconnection"

type person = {
    id: number,
    firstName: string,
    lastName: string
}


async function selectPersons():Promise<person[]> {
    const persons:QueryResult = await db.query('SELECT * FROM people')
    return persons.rows;
}




export const personRepositories = { selectPersons }