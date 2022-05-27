<template>
  <main class="signx">
    <section class="forms">
      <form class="registers" @submit.prevent="register">
        <h2>Register</h2>
        <input
          type="email"
          placeholder="Email"
          class="inp"
          v-model="register_form.email"
          onfocus="this.placeholder=''"
        />
        <input
          type="password"
          placeholder="Password"
          class="inp"
          v-model="register_form.password"
          onfocus="this.placeholder=''"
        />
        <input type="submit" class="sub" value="Register" />
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const register_form = ref({});
    const store = useStore();
    const register = () => {
      store.dispatch("register", register_form.value);
    };
    return {
      register_form,
      register,
    };
  },
};
</script>

<style>
.signx {
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgb(5, 63, 115);
}

.forms {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 3% 0 3% 0;
  padding: 4% 0 4% 0;
  border-radius: 10px;
  background-color: rgb(25, 18, 56);
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
}

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
  text-transform: uppercase;
  margin-bottom: 2rem;
}

@media only screen and (min-width: 992px) {
  .forms {
    width: 50%;
    margin: 3% 0 3% 0;
    height: 100vh;
    padding: 4% 0 4% 0;
    border-radius: 10px;
  }
}
</style>
