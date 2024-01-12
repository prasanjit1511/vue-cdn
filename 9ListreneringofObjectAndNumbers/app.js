var app = Vue.createApp({
  data() {
    return {
      aboutMe: {
        name: "Prasanjit Kumer Roy",
        nickName: "Partho",
        website: "https://github.com/prasanjit1511",
      },
      skills: [
        { name: "HTML", experience: 5 },
        { name: "Css", experience: 10 },
        { name: "Js", experience: 15 },
      ],
    };
  },

  methods: {
    


  },
});

app.mount("#app");
