const app = Vue.createApp({
  data() {
    return {
      review: "",
      show: false,

      skills: [
        { name: "HTML", experience: 5 },
        { name: "Css", experience: 10 },
        { name: "Js", experience: 15 },
        { name: "Tali", experience: 55 },
        { name: "React", experience: 35 },
        { name: "Vue", experience: 11 },
        { name: "Php", experience: 4 },
        { name: "Mysql", experience: 10 },
        { name: "laravel", experience: 9 },
      ],
    };
  },
  computed: {
    totalCount1() {
      console.log("Count From computed property");
      return this.skills.length;
    },
    experiencedSkills() {
      let es = this.skills.filter((item) => {
        return item.experience >= 10;
      });
      return es;
    },
  },
  methods: {
    removeSkill(i) {
      this.skills.splice(i, 1);
    },
  },
});

app.mount("#app");
