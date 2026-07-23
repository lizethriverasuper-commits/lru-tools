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

const firebaseConfig = {
  apiKey: "AIzaSyAwnYpJEutQ1xjf4ijFw3E_Mx-8H4jzbes",
  authDomain: "lru-diagnostico-legal.firebaseapp.com",
  projectId: "lru-diagnostico-legal",
  storageBucket: "lru-diagnostico-legal.firebasestorage.app",
  messagingSenderId: "311799434437",
  appId: "1:311799434437:web:82f0be5908b54dac4474ac"
};

const app = initializeApp(firebaseConfig, "recetarioLRU");

// Exponer globalmente para que app.js (script clásico, no módulo) pueda usarlo
window.__firebaseApp = app;
window.__firestoreFns = { getFirestore, doc, getDoc, setDoc, onSnapshot };
window.__storageFns = { getStorage, ref, uploadString, getDownloadURL };

// Señal de que Firebase ya está listo
window.__firebaseReady = true;
window.dispatchEvent(new Event("firebase-ready"));
