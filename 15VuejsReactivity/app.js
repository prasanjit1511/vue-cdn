const app = Vue.createApp({
  data() {
    return {
      name: "",
    };
  },
  
  methods: {
    clear(){
      this.name ="";
    }
  },
});
app.mount("#app");


