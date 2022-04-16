<template>
<div>
<form @submit.prevent="handleSubmit">
  <label>Email:</label>
  <input type="email" required v-model="email">

  <label>Password:</label>
  <input type="password" required v-model="password">
  <div v-if="passwordError" class="error">{{ passwordError }}</div>

  <label>Role:</label>
  <select v-model="role">
    <option value="developer">Web developer</option>
    <option value="developer">Project Manager</option>
    <option value="developer">Web Designer</option>
    <option value="developer">Operation Manager</option>
    <option value="developer">Hiring Manager</option>
  </select>

  <label>Skills:</label>
  <input type="text" v-model="tempSkill" @keyup.enter="addSkill">
  <div v-for="skill in skills" :key="skill" class="pill">
    <span @click="deleteSkill()">{{ skill }} </span>
  </div>



  <div class="terms">
  <input type="checkbox" v-model="terms" required>
  <label>Accept terms and conditions</label>
  </div>

  <div class="submit">
    <button>Create an Account</button>
  </div>

  <!-- <div>
    <input type="checkbox" value="Binita" v-model="names">
    <label>Binita</label>
  </div>

    <div>
    <input type="checkbox" value="Shaun" v-model="names">
    <label>Shaun</label>
  </div>

    <div>
    <input type="checkbox" value="Mira" v-model="names">
    <label>Mira</label>
  </div>

    <div>
    <input type="checkbox" value="Krishna" v-model="names">
    <label>Krishna</label>
  </div> -->

</form>
<p>Email: {{ email }}</p>
<p>Password: {{ password }}</p>
<p>Role: {{role}}</p>
<p>Terms accepted: {{ terms }}</p>
<!-- <p>names: {{ names }}</p> -->


</div>
</template>

<script>
export default {
  data() {
    return{
       email: '',
       password: '',
       role: '',
       terms: false,
       //  names: []
       tempSkill: '',
       skills: [],
       passwordError: ''
    }
  },
  methods: {
    addSkill() {
      if (this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill)
        }
         this.tempSkill = ''
      }
      },
      deleteSkill(skill) {
        this.skills = this.skills.filter((item) => {
          return skill !== item
        })
      },
      handleSubmit() {
        // validate password
        this.passwordError = this.password.length > 5 ? '' : 'password must be at least 6 chars long'
      
      if(!this.password) {
        console.log('email:', this.email)
        console.log('password: ', this.password)
        cosole.log('role: ', this.role)
        console.log('skills: ', tis.skill),
        console.log('terms accepts: ', this.terms)
      }
    }
  }
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background:white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
} 
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;

}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}



</style>

