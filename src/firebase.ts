// src/firebase.ts
import { initializeApp, getApp, getApps } from "firebase/app";
import {
  getAuth,
  signInAnonymously,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

/** Read config from Vite env (client-safe). */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  // Analytics is optional; only used if MEASUREMENT_ID is present.
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

/** Singleton app (prevents double init during HMR). */
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

/** Auth (persist to local storage). */
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch(() => {
  /* non-fatal */
});

/** Firestore. */
export const db = getFirestore(app);

/** Optional: offline cache for Firestore (ignore multi-tab collision). */
enableIndexedDbPersistence(db).catch(() => {
  /* It's fine if it can't enable (multi-tab or unsupported). */
});

/** Optional: lazy Analytics init (prod + browser + supported). */
export const initAnalytics = async () => {
  if (!import.meta.env.PROD || typeof window === "undefined") return null;
  const { isSupported, getAnalytics } = await import("firebase/analytics");
  return (await isSupported()) ? getAnalytics(app) : null;
};

/** Optional: ensure anonymous auth exactly once. */
export const ensureAnonymous = async () => {
  if (!auth.currentUser) {
    try {
      await signInAnonymously(auth);
    } catch (err) {
      // Non-fatal; app can still run read-only if your rules allow.
      console.warn("Anonymous sign-in failed:", err);
    }
  }
};

export { app };
