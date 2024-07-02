// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
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

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {

    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);

});