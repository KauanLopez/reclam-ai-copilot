// src/lib/firebase.ts

// OBS: Como estamos usando os scripts no HTML, o objeto 'firebase'
// estará disponível globalmente. Não precisamos do 'import { initializeApp }'.

// Configuração do Firebase, lendo as variáveis de ambiente seguras.
// O Vite (ferramenta do seu projeto) substitui import.meta.env pelos valores do .env.local
const firebaseConfig = {
apiKey: "AIzaSyCyo-r6CbP2fo7ltu-7Sp6K8V03Ojk-m8o",
  authDomain: "reclame-ai-d7a3c.firebaseapp.com",
  projectId: "reclame-ai-d7a3c",
  storageBucket: "reclame-ai-d7a3c.firebasestorage.app",
  messagingSenderId: "197875239304",
  appId: "1:197875239304:web:ca80235ed3ee5d37e1923d",
  measurementId: "G-XB3WQBH5HP"
};

// Inicializa o Firebase
// @ts-ignore - 'firebase' vem do script no index.html
const app = firebase.initializeApp(firebaseConfig);

// Exporta os serviços que vamos usar na aplicação
// @ts-ignore
export const auth = firebase.auth();
// @ts-ignore
export const db = firebase.firestore(); // Este é o seu banco de dados Firestore!

