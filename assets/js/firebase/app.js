  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCycAn90N9nEEPFTNHXxe_SEOjx9zzO04o",
    authDomain: "mundo-invertido-f5d29.firebaseapp.com",
    projectId: "mundo-invertido-f5d29",
    storageBucket: "mundo-invertido-f5d29.appspot.com",
    messagingSenderId: "610297452270",
    appId: "1:610297452270:web:31c9589affe82235d305ff"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app