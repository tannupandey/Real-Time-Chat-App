import { Client , Databases, Account, Role} from 'appwrite';


export const PROJECT_ID = '64d09e6739835340fa85'
export const DATABASE_ID = '64d0a092b21a88cb6608'
export const COLLECTION_ID_MESSAGES = '64d0a0cc76ae6a5d84c2'

const client = new Client();


client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);


export default client;
