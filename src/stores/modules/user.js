import axios from 'axios';
// import { reject } from 'core-js/fn/promise';
export default {
    state:{},
    getters:{},
    mutations:{},
    actions:{
        // eslint-disable-next-line no-unused-vars
        LOGIN:({commit},payload)=>{
return new Promise((resolve,reject)=>{
axios.post('https:/api.truth.orabi.me/auth/login',payload)
// eslint-disable-next-line no-unused-vars
.then(({data,status})=>{
    if(status===200){
resolve(true)
    }
})
.catch(error=>{
reject(error);
})
});


        }
    }
}