import { Client , Databases, Account, Role} from 'appwrite';


export const PROJECT_ID = 'enter ur project id'
export const DATABASE_ID = 'enter your db id'
export const COLLECTION_ID_MESSAGES = 'enter your collection id'

const client = new Client();


client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);


export default client;
