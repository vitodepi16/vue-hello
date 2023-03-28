const { createApp } = Vue;

createApp({
    data(){ 
        return{
            titolo: 'Ciao ! Ti presento BARI',
            miaclasse:'red text-center',
            image: 'img/bari_lungomare.webp',
    }
   
},
     methods: {
        changecolor(){
            this.miaclasse = 'green'
        }
 }
}).mount('#app');


