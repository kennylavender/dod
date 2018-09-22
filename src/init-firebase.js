const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

var config = {
  apiKey: 'AIzaSyDf9o8qNtsdHNZnMIJJ1gULesjuru2ysFY',
  authDomain: 'dreams-of-darkness.firebaseapp.com',
  databaseURL: 'https://dreams-of-darkness.firebaseio.com',
  projectId: 'dreams-of-darkness',
  storageBucket: 'dreams-of-darkness.appspot.com',
  messagingSenderId: '408375047456',
};

firebase.initializeApp(config);
