// src/lib/firebase.ts

// OBS: Como estamos usando os scripts no HTML, o objeto 'firebase'
// estará disponível globalmente. Não precisamos do 'import { initializeApp }'.

// Configuração do Firebase, lendo as variáveis de ambiente seguras.
// O Vite (ferramenta do seu projeto) substitui import.meta.env pelos valores do .env.local
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Inicializa o Firebase
// @ts-ignore - 'firebase' vem do script no index.html
const app = firebase.initializeApp(firebaseConfig);

// Exporta os serviços que vamos usar na aplicação
// @ts-ignore
export const auth = firebase.auth();
// @ts-ignore
export const db = firebase.firestore(); // Este é o seu banco de dados Firestore!

