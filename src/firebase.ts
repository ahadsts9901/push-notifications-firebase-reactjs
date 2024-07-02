import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyD0dJrEkEoq9hpWmjFTq4NI1bWwpgPJ40E",
    authDomain: "simple-database-b15ab.firebaseapp.com",
    databaseURL: "https://simple-database-b15ab-default-rtdb.firebaseio.com",
    projectId: "simple-database-b15ab",
    storageBucket: "simple-database-b15ab.appspot.com",
    messagingSenderId: "374723832608",
    appId: "1:374723832608:web:1fbfe6a876a1107a1b0545",
    measurementId: "G-0N19V5LFCN"
};

const firebaseApp = initializeApp(firebaseConfig);
export const messaging = getMessaging(firebaseApp);

export const _getToken = async (setTokenFound: any) => {

    try {
        const currentToken = await getToken(messaging,
            {
                vapidKey: "BHRT41SfQKR5YQMuXIB-cIayEkPJ3SAnMaJ6AbcbcuHml3HAWZ_wqVDytADBxpaxpujBlEzxw0BBj69qe5kn9aE"
            }
        )
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            setTokenFound(true);
        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound(false);
        }
    } catch (err) {
        console.error('An error occurred while retrieving token. ', err);
    }

}