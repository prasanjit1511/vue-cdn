var app = Vue.createApp ({

  data() {
    return {
      //   msg: "Welcome to vus js",

      // tutorialInfo: {
      //   name: "Vue js ",
      //   githubLink: "https://github.com/prasanjit1511",
      // },

      // htmlcode: '<a href="https://github.com/prasanjit1511">Partho Github</a>', 

      //  Event and method arguments -----

          count:0

     



     

    };


  },
  //  Event and method arguments

  // methods:{
  //   getCurrenTime(){

  //     let ct = new Date();
  //     return new Date();

  //   },

   methods:{
    increase(){
      this.count = this.count + 1; //this.count++
    },
    decrease(){
      if (this.count > 0) {
        this.count = this.count - 1;    //this.count--

      }
      
    }
  },






});

app.mount("#app");
