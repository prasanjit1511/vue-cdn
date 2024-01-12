var app = Vue.createApp({
  data() {
    return {
      show: false,

      skills: [
        { name: "HTML", experience: 5 },
        { name: "Css", experience: 10 },
        { name: "Js", experience: 15 },
        { name: "Tali", experience: 55 },
        { name: "React", experience: 35 },
        { name: "Vue", experience: 11 },
        { name: "Php", experience: 3 },
        { name: "Mysql", experience: 10 },
        { name: "laravel", experience: 9 },
      ],

    };
  },

  methods: {
    
    toggle(){
     this.show = !this.show
    }


  },
});

app.mount("#app");
