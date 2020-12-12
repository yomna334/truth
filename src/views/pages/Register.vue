<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <b-form @submit="onSubmit" v-if="show">
            <h1>Sign up</h1>
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
              label="Your Name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Enter name"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Password:"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="form.password"
                type="password"
                required
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </b-col>
        <b-col>
          <img src="../../assets/imgs/signup-image.jpg" /><br>
          <router-link to="login">I am already member</router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      axios.post('https:/api.truth.orabi.me/auth/register',this.form)
      .then(function(res){
        console.log(res)
        
      })
    },
   
  },
};
</script>