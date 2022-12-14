import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { User } from "firebase/auth";
import { getDatabase, ref, set, get, onValue } from "firebase/database";
import { Product } from "../pages/AddProduct";
import { v4 as uuid } from "uuid";
import { ProductList } from "../Organisms/ProductCardSection";

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

export const addNewProduct = async (product: Product, imageUrl: string) => {
  const id = uuid();
  set(ref(database, `products/${id}`), {
    ...product,
    id,
    imageUrl,
    price: parseInt(product.price),
    options: product.options.split(","),
  });
};

export const login = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      return { ...user, admin: false };
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logout = async () => {
  return signOut(auth).then(() => null);
};

const adminUser = async (user: User) => {
  return get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
};

export const onUserStateChange = async (callback: (user: User | null) => void) => {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
};

export const getProducts = async (): Promise<ProductList[] | undefined> => {
  return get(ref(database, "products/")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
  });
};

export const getProductDetail = async (id: string): Promise<ProductList | undefined> => {
  return get(ref(database, `products/${id}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return snapshot.val();
    }
    console.log(snapshot);
  });
};
