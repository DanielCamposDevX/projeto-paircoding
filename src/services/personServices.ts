import { personRepositories } from '../repositories/personRepository'




async function listPersons() {
    const persons = await personRepositories.selectPersons();
    const min = Math.ceil(0);
    const max = Math.floor(persons.length);
    const n = Math.floor(Math.random() * (max - min) + min);
    return persons[n];
}




export const personServices = { listPersons }