
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('pesan', require('./components/pesan.vue'));
Vue.component('log', require('./components/log.vue'));
Vue.component('ketik', require('./components/ketik.vue'));

const app = new Vue({
    el: '#app',
    data:{
    	 messages :[
    		{
    			message:"Hi!",
    			user   :"Bambang"
    		},
    		{
    			message:"Opo?",
    			user   :"heru"
    		}
    	]
    },
    methods:{
    	tambahpesan(message){
    		this.messages.push(message);
    		// console.log(message);
    		// this.user.push(user);

    		alert("pesan terkirim");
    	}
    }
});
