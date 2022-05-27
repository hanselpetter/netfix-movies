<template>
  <main class="signx">
    <section class="forms">
      <form class="login" @submit.prevent="login">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email address"
          class="inp"
          v-model="login_form.email"
          onfocus="this.placeholder=''"
        />
        <input
          type="password"
          placeholder="Password"
          class="inp"
          v-model="login_form.password"
          onfocus="this.placeholder=''"
        />
        <input type="submit" class="sub" value="Login" />
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const login_form = ref({});
    const store = useStore();
    const login = () => {
      store.dispatch("login", login_form.value);
    };
    return {
      login_form,
      login,
    };
  },
};
</script>

<style>
.inp {
  padding: 2% 2% 2% 3%;
  font-size: 1.3em;
}

.inp:focus {
  border: 2px solid #000;
  border-radius: 5px;
}

h2 {
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

.inp {
  appearance: none;
  border: none;
  outline: none;
  background: #fff;
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;
}

input:focus {
  border: 1.5px solid #42b883;
}

input:not([type="submit"]) {
  opacity: 0.8;
  transition: 0.4s;
}

input:focus:not([type="submit"]) {
  opacity: 1;
}

input::placeholder {
  color: inherit;
}

form.login input:not([type="submit"]) {
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
}

.sub {
  display: flex;
  color: #fff;
  border-radius: 50px;
  background-color: #42b883;
  width: 40%;
  padding: 2%;
  border: transparent;
  justify-content: center;
  margin: 1% auto 0 auto;
  font-size: 1.2em;
}

.sub:focus {
  cursor: pointer;
}
</style>
