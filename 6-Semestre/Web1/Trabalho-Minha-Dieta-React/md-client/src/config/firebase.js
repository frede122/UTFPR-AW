import firebase from 'firebase';


const firebaseConfig = {
  
    apiKey: "AIzaSyDzWF6F8Vn38r8e3iU3lLzE1r8xN5_Vq8k",
    authDomain: "app-minha-dieta-3fe94.firebaseapp.com",
    projectId: "app-minha-dieta-3fe94",
    storageBucket: "app-minha-dieta-3fe94.appspot.com",
    messagingSenderId: "909481983291",
    appId: "1:909481983291:web:c5d97bbe30e2b7c9bfcb1e"
}
  // Initialize Firebase


  // const firebaseConfig = {
  //   apiKey: "AIzaSyC1B8dXkVbz_CnIJ_O1F7johA9W-bQXXIs",
  //   authDomain: "app-aula-posts.firebaseapp.com",
  //   projectId: "app-aula-posts",
  //   storageBucket: "app-aula-posts.appspot.com",
  //   messagingSenderId: "185746775101",
  //   appId: "1:185746775101:web:975d9717f1008b703c5e54"
  // };

export default firebase.initializeApp(firebaseConfig);
//firebase.analytics();
