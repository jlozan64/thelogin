  
import Vue from 'vue'

import firebase from 'firebase/app'
import 'firebase/firebase-auth'

import * as firebaseui from 'firebaseui'

const firebaseConfig = {
    apiKey: "AIzaSyChqAGIjTIcoFY_6RvKojj9dqPgOaTVJlk",
    authDomain: "loginexample-1b9e2.firebaseapp.com",
    databaseURL: "https://loginexample-1b9e2.firebaseio.com",
    projectId: "loginexample-1b9e2",
    storageBucket: "loginexample-1b9e2.appspot.com",
    messagingSenderId: "330471609836",
    appId: "1:330471609836:web:0e033a3c88ade1c81c1cc9"
}

firebase.initializeApp(firebaseConfig)
const ui = new firebaseui.auth.AuthUI(firebase.auth())

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseui = ui