import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCSor4FhLXD0SjmdToqJt_i7oZj8TKFsQE",
    authDomain: "whatsapp-clone-dbea2.firebaseapp.com",
    projectId: "whatsapp-clone-dbea2",
    storageBucket: "whatsapp-clone-dbea2.appspot.com",
    messagingSenderId: "274769616029",
    appId: "1:274769616029:web:9faf9a081665860f734874",
    measurementId: "G-QW4Y7DFJL0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider };
  export default db;