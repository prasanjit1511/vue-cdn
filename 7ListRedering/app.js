var app = Vue.createApp({
  data() {
    return {
      // skills: ["HTML", "CSS", "JS"],

      skills: [
        { name: "HTML", experience: 5 },
        { name: "Css", experience: 10 },
        { name: "Js", experience: 15 },
      ],
      newSkill: {name:"",experience:0},
      // newSkill: "",
    };
  },

  methods: {
    addSkill() {
      // this.skills.push(this.newSkill);
      this.skills.push(this.newSkill);
      this.newSkill={};
      // this.newSkill="";
    },

    removeSkill(i){
     this.skills.splice(i, 1);
    },
  },
});

app.mount("#app");
