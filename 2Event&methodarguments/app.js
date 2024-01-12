var app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increase(amount) {
      this.count = this.count + amount;
    },

    decrease(amount) {
      if (this.count > 0) {
        this.count = this.count - amount;
      }
    },

    test(evt) {
      console.log(evt);
    },
    
    increasee(evt, amount) {
      this.count = this.count + amount;
      console.log(evt);
    },
  },
});

app.mount("#app");
