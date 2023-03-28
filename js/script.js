const { createApp } = Vue;

createApp({
    data(){ 
        return{
            titolo: 'Ciao !',
            miaclasse:'red',
            image: 'https://www.r101.it/resizer/616/348/true/1576682426085.jpg--cosa_rende_una_persona_piu_interessante_.jpg?1576682428724',
    }
   
},
     methods: {
        changecolor(){
            this.miaclasse = 'green'
        }
 }
}).mount('#app');


