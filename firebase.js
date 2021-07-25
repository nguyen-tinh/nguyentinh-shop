import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrJHz4YcCyJ4v99j_8Ae_8YVKPEGJOMOI",
  authDomain: "nguyen-tinh-shop.firebaseapp.com",
  projectId: "nguyen-tinh-shop",
  storageBucket: "nguyen-tinh-shop.appspot.com",
  messagingSenderId: "495920599923",
  appId: "1:495920599923:web:2e680606e000808886ab06",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
