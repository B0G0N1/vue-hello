// Importa la funzione `createApp` da Vue
const { createApp } = Vue;

// Crea una nuova applicazione Vue
createApp({
    data() {
        return {
            // Messaggio di testo che sarà visualizzato nell'app
            message: 'Hello, Vue.js!',
            // URL di un'immagine che sarà visualizzata nell'app
            imageUrl: 'https://notiziamix.it/wp-content/uploads/2023/02/Never-Gonna-Give-You-Up-Rick-Astley-Youtube.jpg'
        };
    }
}).mount('#app');