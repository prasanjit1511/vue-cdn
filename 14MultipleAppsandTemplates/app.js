const app = Vue.createApp({
  data() {
    return {
      name: "",
    };
  },
  template: `
        <h1>Enter Your Name</h1>
        <input type="text" v-model="name">
        <br>
        <p>Your Name is : {{ name }}</p>
  `,
  methods: {},
});
app.mount("#app");


const app1 = Vue.createApp({
  data() {
    return {
      message: "Hello World",
    };
  },
  template:"<h1>Your Name is : {{ message }}</h1>",

  methods: {},
});
app1.mount("#app1");
