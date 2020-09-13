import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
	apiKey: "AIzaSyCKPixTHul4vsUo1nc_EX4pmEb4K1luscs",
	authDomain: "vue-calendar-8346c.firebaseapp.com",
	databaseURL: "https://vue-calendar-8346c.firebaseio.com",
	projectId: "vue-calendar-8346c",
	storageBucket: "vue-calendar-8346c.appspot.com",
	messagingSenderId: "133286653812",
	appId: "1:133286653812:web:b1db31b2fc28d8b1a14621",
});

export const db = firebase.firestore();

new Vue({
	vuetify,
	render: (h) => h(App),
}).$mount("#app");
