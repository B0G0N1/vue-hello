const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello, Vue.js!',
            imageUrl: 'https://vuejs.org/images/logo.png'
        };
    }
}).mount('#app');