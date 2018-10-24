require('./modernizr');


import axios from 'axios';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Global
import VueTheMask from 'vue-the-mask';
window.Vue.use(VueTheMask);



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
            // Mudar para api Selecioanada
            // TODO: Alterar api para futura aplicação
            axios.post('http://lumen.infocorp.local/api/contato', this.form)
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

const brief = new Vue({
    el: '#conte_sua_ideia',
    data: {
        form: {
            errors: {},
            successful: '',
            nome: null,
            trabalho: null,
            email: null,
            telefone: null,
            problema: null,
            beneficios: null,
            publicoAlvo: null,
            site: false,
            mobile: false,
            sistemaWeb: false,
            sistemasDesktop: false,
            curso: false
        },
    },
    methods: {
        submitForm() {
            // Mudar para api Selecioanada
            // TODO: Alterar api para futura aplicação
            axios.post('http://lumen.infocorp.local/api/brief', this.form)
                .then((response) => {
                    this.form.successful = "Enviado com sucesso!";
                    document.getElementById("top_header").scrollIntoView();
                })
                .catch((error) => {
                    this.form.errors = this.errorListServer(error);
                })
        },
        checkForm: function () {
            this.form.errors = this.errorList;

            if (this.form.nome && this.form.trabalho && this.form.email && this.form.telefone) {
                this.submitForm();
                return true;
            }

            document.getElementById("conte_sua_ideia").scrollIntoView();
        },
        errorListServer(error) {
            const log = {};

            if (error.response.data.nome) log.nome = error.response.data.nome[0];

            if (error.response.data.trabalho) log.trabalho = error.response.data.trabalho[0];

            if (error.response.data.email) log.email = error.response.data.email[0];

            if (error.response.data.telefone) log.telefone = error.response.data.telefone[0];

            return log;

        },

        validEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    },
    computed: {
        errorList() {
            const errors = {};
            if (!this.form.nome) errors.nome = "Nome é Obrigatório";

            if (!this.form.trabalho) errors.trabalho = "Instituição é Obrigatório";

            if (!this.form.email) {
                errors.email = "E-mail é Obrigatório";
            } else if (!this.validEmail(this.form.email)) {
                errors.email = "E-mail inválido";
            }

            if (!this.form.telefone) errors.telefone = "Telefone é Obrigatório";

            return errors;
        }
    }
});

/**
 * Swiper 4.3.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 5, 2018
 */

/*import swiper from 'swiper';

const Services = new swiper('.swiper-container', {
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is <= 480px
        991: {
            slidesPerView: 1,
        },
    }
});*/


