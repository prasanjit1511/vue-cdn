var app = Vue.createApp({
  data() {
    return {
      num: "",
      result: "",
    };
  },

  methods: {
    // handleInput(e){
    //   // console.log(e);
    //   this.num = e.target.value;

    // },
    getDouble() {
      this.result = this.num * 2;
    },
    getSquare() {
      this.result = this.num * this.num;
    },
    reset() {
      this.num = "";
      this.result = "";
    },

    addTen(){
      this.result = this.num + 10;
    },
  },
});

app.mount("#app");
