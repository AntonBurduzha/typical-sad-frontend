<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="saveUser">
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">Sign up</div>
        </md-card-header>
        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-content>
          <md-field :class="getValidationClass('login')">
            <label for="login">Login</label>
            <md-input name="login" v-model.trim="form.login" :disabled="sending"/>
            <span class="md-error" v-if="!$v.form.login.required">The login is required</span>
            <span class="md-error" v-else-if="!$v.form.login.minlength">Minimal length 3</span>
          </md-field>

          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" v-model.trim="form.email" :disabled="sending"/>
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email format</span>
          </md-field>

          <md-field :class="getValidationClass('gender')">
            <label for="gender">Gender</label>
            <md-select name="gender" v-model="form.gender" :disabled="sending">
              <md-option></md-option>
              <md-option value="m">Male</md-option>
              <md-option value="f">Female</md-option>
            </md-select>
            <span class="md-error" v-if="!$v.form.gender.required">The gender is required</span>
          </md-field>

          <md-field :class="getValidationClass('password')">
            <label for="password">Password</label>
            <md-input type="password" name="password" v-model.trim="form.password" :disabled="sending"/>
            <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
            <span class="md-error" v-else-if="!$v.form.password.minlength">Minimal length 3</span>
          </md-field>

          <md-field :class="getValidationClass('passwordRepeat')">
            <label for="passwordRepeat">Repeat Password</label>
            <md-input type="password" name="passwordRepeat" v-model.trim="form.passwordRepeat" :disabled="sending"/>
            <span class="md-error" v-if="!$v.form.passwordRepeat.pswdsMatches">Passwords should matches</span>
          </md-field>

          <md-checkbox v-model="form.agreement" class="input-agree md-primary">
            I agree to the Terms and Conditions
          </md-checkbox>
          <span class="md-error" style="color: red; font-size: 1 2px;" v-if="termsChecked">
            You should agree with terms and conditions.
          </span>
        </md-card-content>

        <md-card-actions>
          <md-button type="button" class="md-primary" @click="saveUser" :disabled="sending">Create user</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active="error">An error occurs! Please try again.</md-snackbar>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { validationMixin } from 'vuelidate'
import { required, email, sameAs } from 'vuelidate/lib/validators'

const minLength = value => value.length > 2;

export default {
  name: 'SignupForm',
  mixins: [validationMixin],
  data: () => ({
    form: { login: '', email: '', gender: '', password: '', passwordRepeat: '', agreement: false },
  }),
  computed: {
    ...mapState({ sending: state => state.signup.fetching, error: state => state.signup.error }),
    termsChecked: function() {
      return this.$v.form.agreement.$invalid && this.$v.form.agreement.$dirty;
    }
  },
  methods: {
    ...mapActions('signup', ['signup']),
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return { 'md-invalid': field.$invalid && field.$dirty };
      }
    },
    saveUser () {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.signup({
          login: this.form.login,
          email: this.form.email,
          gender: this.form.gender,
          password: this.form.password,
          password_repeat: this.form.passwordRepeat,
        });
      }
    }
  },
  validations: {
    form: {
      login: { required, minLength },
      email: { required, email },
      gender: { required },
      password: { required, minLength },
      passwordRepeat: { pswdsMatches: sameAs('password') },
      agreement: { checked: sameAs(() => true) }
    }
  },
}
</script>

<style lang="scss" scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
.input-agree {
  width: 100%;
  min-height: 48px;
  margin: 4px 0 0;
  padding-top: 16px;
  display: flex;
}
</style>
