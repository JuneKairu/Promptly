import {initializeApp} from '@react-native-firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDmRvZsRzpaBXXncmt-BJ3qDu-8lntBaog",
  authDomain: "promptly-d20cb.firebaseapp.com",
  projectId: "promptly-d20cb",
  storageBucket: "promptly-d20cb.appspot.com",
  messagingSenderId: "669976616506",
  appId: "1:669976616506:web:54973ea2bf3d8b5d579f03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(firebaseConfig);
