import firebase from 'firebase';


const firebaseConfig = {
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyD9buiniCq8y9Az5XsOCDp46kfh_Zbm-SM",
    authDomain: "app-minha-dieta.firebaseapp.com",
    projectId: "app-minha-dieta",
    storageBucket: "app-minha-dieta.appspot.com",
    messagingSenderId: "506630309690",
    appId: "1:506630309690:web:ac6e08b3ad9a2edeb9f203",
    measurementId: "G-8FVZXS5XV8"
  };
  // Initialize Firebase


export default firebase.initializeApp(firebaseConfig);
//firebase.analytics();
