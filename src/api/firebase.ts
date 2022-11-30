import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { User } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const provider = new GoogleAuthProvider();

export const login = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential: any = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      if (checkAdminKey() === token) return { ...user, admin: true };
      // sessionStorage.setItem("token", token);
      return { ...user, admin: false };
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logout = async () => {
  return signOut(auth).then(() => null);
};

export const onUserStateChange = async (callback: (user: User | null) => void) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

function writeUserData(userId: string, name: string, email: string, imageUrl: string) {
  set(ref(database, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

export const checkAdminKey = () => {
  const starCountRef = ref(database, "admin");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    return data;
    // updateStarCount(postElement, data);
  });
};
