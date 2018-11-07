/*
|--------------------------------------------------------------------------
| SCROLL REVEAL
|--------------------------------------------------------------------------
|
|  
|
*/

import ScrollReveal from 'scrollreveal';

let config = {
    delay: 0,
    distance: '0px',
    duration: 0,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 0,
    },
    scale: 1,
    cleanup: true,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: true,
    useDelay: 'always',
    viewFactor: 0.0,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    afterReset: function (el) {
        el.classList.remove('is__visible');
        el.classList.add('is__hidden');
    },
    afterReveal: function (el) {
        el.classList.remove('is__hidden');
        el.classList.add('is__visible');
    },
    beforeReset: function (el) {

    },
    beforeReveal: function (el) {

    },
}



ScrollReveal().reveal('section', config);

/*
|--------------------------------------------------------------------------
| AXIOS
|--------------------------------------------------------------------------
|
|  
|
*/
const axios = require('axios');

/*
|--------------------------------------------------------------------------
| VUE
|--------------------------------------------------------------------------
|
|  
|
*/
window.Vue = require('vue/dist/vue.min');

const contact = new Vue({
    el: '#contact',
    data: {
        form: {
            errors: {},
            successful: '',
            name: null,
            email: null,
            subject: null
        },
    },
    methods: {
        submitForm() {
            // TODO: Mudar para api selecionada
            axios.post('https://api.infocorpjr.com/api/contato', this.form)
                .then((response) => {
                    this.form.successful = "Enviado com sucesso!";
                })
                .catch((error) => {
                    this.form.errors = this.errorListServer(error);
                })
        },
        checkForm: function () {
            this.form.errors = this.errorList;

            if (this.form.name && this.form.email && this.form.subject) {
                this.submitForm();
                return true;
            }
        },
        errorListServer(error) {
            const log = {};

            if (error.response.data.name) log.name = error.response.data.name[0];

            if (error.response.data.email) log.email = error.response.data.email[0];

            if (error.response.data.subject) log.subject = error.response.data.subject[0];

            return log;

        }
    },
    computed: {
        errorList() {
            const errors = {};
            if (!this.form.name) errors.name = "Nome é Obrigatório";

            if (!this.form.email) errors.email = "E-mail é Obrigatório";

            if (!this.form.subject) errors.subject = "Assunto é Obrigatório";

            return errors;
        }
    }
});