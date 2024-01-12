const app = Vue.createApp({
  data() {
    return {
      mobile: "",
      name: {
        firstName: "",
        lastName: "",
      },
    };
  },
  watch: {
    mobile(newvalue, oldvalue) {
      console.log(newvalue);
      if (isNaN(newvalue)) {
        alert("Enter valid mobile number");
        this.mobile = oldvalue;
      }
      if (newvalue.length == 11) {
        alert("An OTP has been sent");
      }
    },

    // "name.firstName": function (newvalue, oldvalue) {
    //   console.log(newvalue, oldvalue);
    // },
    name:{
      deep:true,
      handler: function (newvalue, oldvalue){
        console.log(newvalue, oldvalue);
      }
    },
  },
  methods: {},
});

app.mount("#app");
