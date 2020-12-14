<template>
    <div>
<b-container fluid>
      <b-row>
        <b-col>
          <img src="../../assets/imgs/signin-image.jpg" /><br>
          <router-link to="/">don't have account?</router-link>
        </b-col>
        <b-col>
          <b-form @login="onLogin" v-if="show">
            <h1>Sign in</h1>
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Your Password:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                 v-model="form.password"
                type="password"
                required
                placeholder="Enter Password"
              ></b-form-input>
            </b-form-group>

    
            <b-button type="submit" variant="primary">Login</b-button>
          </b-form>
        </b-col>
        
      </b-row>
    </b-container>
</div>
</template>

<script>
  // import axios from 'axios';
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onLogin(evt) {
      console.log(this.$store)
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      this.$store.dispatch("LOGIN",this.form)
      // axios.post('https:/api.truth.orabi.me/auth/login',this.form)
      .then(function(res){
        console.log(res)
        this.$router.push('home')
        
      })
    },
   
  },
};
</script>