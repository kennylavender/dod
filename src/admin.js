const firebase = require("firebase/app");
require("firebase/database");
require("firebase/auth");

const admin = document.getElementById('admin');
const signOutButton = document.getElementById('admin-sign-out-button')
const signInForm = document.getElementById('admin-sign-in-form')
const showSoldOutFlagButton = document.getElementById('show-sold-out-notice')
const hideSoldOutFlagButton = document.getElementById('hide-sold-out-notice')
const isVisibleClass = 'is-visible'
const isSignedInClass = 'is-signed-in'
const isSignedOutClass = 'is-signed-out'

let isSignedIn = false
let maxLoginAttempts = 20
let processingSignInRequest = false

const showAdmin = () => admin.classList.add(isVisibleClass);
const hideAdmin = () => admin.classList.remove(isVisibleClass);
const addSignedIn = () => admin.classList.add(isSignedInClass);
const removeSignedIn = () => admin.classList.remove(isSignedInClass)
const addSignedOut = () => admin.classList.add(isSignedOutClass);
const removeSignedOut = () => admin.classList.remove(isSignedOutClass)

const onSignOut = () => {
  isSignedIn = false
  removeSignedIn()
  addSignedOut()
}
const onSignIn = () => {
  isSignedIn = true
  addSignedIn()
  removeSignedOut()
}

signInForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const form = new FormData(signInForm);
  signInRequest(form.get('email'), form.get('password'))
})

signOutButton.addEventListener('click', () => signOutRequest())

const signOutRequest = () => firebase.auth().signOut()

const signInRequest = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  alert('Invalid email/password')
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    onSignIn()
  } else {
    onSignOut()
  }
});

const displayAdminCheck = () => {
  if (window.location.pathname === '/admin') {
    showAdmin()
  } else {
    hideAdmin()
  }
}

displayAdminCheck()

const log = (...args) => console.log(...args)

const isSoldOut = firebase.database().ref('/soldOut/isSoldOut')

const handleShowSoldOutFlag = () => isSoldOut.set(true).catch(log)
const handleHideSoldOutFlag = () => isSoldOut.set(false).catch(log)



showSoldOutFlagButton.addEventListener('click', handleShowSoldOutFlag)
hideSoldOutFlagButton.addEventListener('click', handleHideSoldOutFlag)