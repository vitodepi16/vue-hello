const { createApp } = Vue;

createApp({
    data(){ 
        return{
            titolo: 'Ciao ! Ti presento BARI',
            miaclasse:'red text-center ',
            classContainer:'container d-flex justify-content-center',
            image: 'img/bari_lungomare.webp',
    }
   
},
     methods: {
        changecolor(){
            this.miaclasse = 'green text-center'
            
        }
 }
}).mount('#app');


