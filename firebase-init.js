// ============================================================
// Firebase init — Recetario LRU (proyecto: lru-diagnostico-legal)
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, doc, getDoc, setDoc, onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  getStorage, ref, uploadString, getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import {
  getAuth, signInAnonymously, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwnYpJEutQ1xjf4ijFw3E_Mx-8H4jzbes",
  authDomain: "lru-diagnostico-legal.firebaseapp.com",
  projectId: "lru-diagnostico-legal",
  storageBucket: "lru-diagnostico-legal.firebasestorage.app",
  messagingSenderId: "311799434437",
  appId: "1:311799434437:web:82f0be5908b54dac4474ac"
};

const app = initializeApp(firebaseConfig, "recetarioLRU");
const auth = getAuth(app);

// Exponer globalmente para que app.js (script clásico, no módulo) pueda usarlo
window.__firebaseApp = app;
window.__firestoreFns = { getFirestore, doc, getDoc, setDoc, onSnapshot };
window.__storageFns = { getStorage, ref, uploadString, getDownloadURL };

// Login anónimo silencioso: el cliente sigue viendo solo el PIN de la app,
// pero por debajo queda autenticado ante Firebase (request.auth != null),
// que es lo que exigen las reglas de Firestore/Storage para leer o escribir.
function initAuth() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Ya autenticado (anónimamente) — recién ahora la app puede leer/escribir
      window.__firebaseReady = true;
      window.dispatchEvent(new Event("firebase-ready"));
    }
  });
  signInAnonymously(auth).catch((err) => {
    console.error("Error de autenticación anónima:", err);
    // Aun si falla, liberamos la app para no dejarla colgada; loadState/saveState
    // mostrarán el error real de permisos si las reglas lo bloquean.
    window.__firebaseReady = true;
    window.dispatchEvent(new Event("firebase-ready"));
  });
}

initAuth();
